import {action, runInAction, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';
import axios from 'axios';
import XMPP from '../utils/XMPP';
import { persist } from 'mobx-persist'

const API = 'http://ip-api.com/json';

import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';
useStrict(true);


@autobind
class xmppStore {

	@observable counter = 0;
  @observable geoIP = {};
  @observable getIPState = "pending";
  total = 0;


  //XMPP 
  @persist @observable logged = false;
  @observable loading = false;
  @observable loginError = null;
  @observable error = null;
  @observable conversation = [];

  @persist @observable username = "";
  @persist @observable password = "";
	constructor(){
  	// reaction(()=> this.counter, () => console.log(this.counter));
   //  reaction(()=> this.getIPState, () => console.log(this.geoIP.city));

    //XMPP
    XMPP.on('loginError', this.onLoginError);
    XMPP.on('error', this.onError);
    XMPP.on('disconnect', this.onDisconnect);
    XMPP.on('login', this.onLogin);
    XMPP.on('message', this.onReceiveMessage);
    // //default values
    // this.username = "";
    // this.password = "";
	}

	@action increaseTotal(){
    this.total++;
  }

  @action increase(){
    this.counter++;
  }

  @action decrease(){
    this.counter--;
  }

  // Get User GeoIP
  @action 
  async getGeoIP(){
    this.geoIP = {};
    this.getIPState = "pending";
    try{
      await axios.get('http://ip-api.com/json').then((res) => {
        runInAction(() => {
          this.geoIP = res.data;
          this.getIPState = "done";
        });
      });
    }catch(error){
      console.log(error);
      runInAction(() => {
        this.getIPState = "error";
      });
    }
  }

  @action
  sendMessage(targetUser, message){
      if (!this.targetUser || !this.targetUser.trim()){
          console.error("No targetUser is defined");
      }
      if (!message || !message.trim()){
          return false;
      }
      // add to list of messages
      this.conversation.unshift({own:true, text:message.trim()});
      // empty sent message
      this.error = null;
      // send to XMPP server
      XMPP.message(message.trim(), targetUser);
  }

  @action
  onReceiveMessage({from, body}){
      console.log("onReceiveMessage")
      // extract username from XMPP UID
      if (!from || !body){
          return;
      }
      var name = from.match(/^([^@]*)@/)[1];
      this.conversation.unshift({own:false, text:body});
  }

  @action
  onLoginError(){
      this.loading = false;
      this.conversation.replace([]);
      this.loginError = "Cannot authenticate, please use correct local username";
  }

  @action
  onError(message){
      this.error = message;
  }

  @action
  onDisconnect(message){
      this.logged = false;
      this.loginError = message;
  }

  @action
  onLogin(){
      console.log("LOGGED!");
      this.conversation.replace([]);
      this.loading = false;
      this.loginError = null;
      this.logged = true;
  }

  @action
  login({username, password}){
      this.username = username;
      this.password = password;
      if (!username || !username.trim()){
          this.loginError = "username should not be empty";
      } else if (!password || !password.trim()){
          this.loginError = "password should not be empty";
      } else {
          this.loginError = null;
          XMPP.connect(this.username, this.password);
          this.loading = true;
      }
  }

  @action
  disconnect() {
      XMPP.disconnect();
  }

}

export default  new xmppStore();