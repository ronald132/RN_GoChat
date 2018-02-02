import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './GoChat.actions';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	textStyle: {
		color: 'black'
	}
});

class GoChat extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount(){
		this.props.actions.getCurrentRate();
	}

	render() {
		return(
			<Text style={styles.textStyle}>This is rate yeah {this.props.currentRate.hello}</Text>
		);
	}
}

function mapStateToProps(state, ownProps){
	return {
		currentRate: state.rate.currentRate
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(GoChat);