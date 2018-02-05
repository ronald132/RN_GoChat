import { StyleSheet } from 'react-native';

const black = '#202020';
const lime = '#41A317';
const styles = StyleSheet.create({
	LoginContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	TitleText: {
		color: 'green',
		fontSize: 20,
		marginBottom: 20
	},
	Sign_Phone_Btn: {
		backgroundColor: '#eee',
		padding: 16,
		marginTop: 8
	},
	LoginButtons: {
		marginLeft: 16,
		marginRight: 16
	},
	SocialButtons: {
		marginTop: 8,
		flexDirection: 'row'
	},
	SocialButtonsItem: {
		flex: 0.5
	},
	FB_Btn: {
		backgroundColor: '#eee',
		marginRight: 2,
		padding: 16
	},
	Google_Btn: {
		backgroundColor: '#eee',
		marginLeft: 2,
		padding: 16
	},
	SignUpText: {
		marginTop: 16,
		fontSize: 14,
		color: black
	},
	center: {
		alignSelf: 'center'
	},
	RowSeparator: {
		height:1,
		backgroundColor: '#eee'
	},
	ChatCellContainer: {
		flexDirection: 'row',
		padding: 12,
		position: 'relative'
	},
	ChatCellImage: {
		width: 40,
		height: 40,
		resizeMode: 'cover',
		alignSelf: 'baseline'
	},
	ChatCellTextContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 10
	},
	ChatCellSender: {
		fontSize: 16,
		fontWeight: '700',
		width: 240
	},
	ContactCellName: {
		fontSize: 16,
		fontWeight: '400',
		width: 240	
	},
	ChatCellText: {
		fontSize: 14,
		width: 240
	},
	ChatCellTimeContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	ChatCellTime: {
		fontSize: 14,
		marginRight: 16
	},
	NotificationBubble: {
		width: 20,
		height: 20,
		borderRadius: 10,
		position: 'absolute',
		top: 5,
		left: 40,
		backgroundColor: '#F93869',
		zIndex: 1,
		justifyContent: 'center'
	},
	NotificationBubbleText: {
		color: 'white',
		width: 10,
		alignSelf: 'center',
		fontSize: 10
	},
	SectionHeaderContainer: {
		padding: 8,
		justifyContent: 'center',
		backgroundColor: '#eaeaea'
	},
	SectionHeaderText: {
		fontSize: 13,
		fontWeight: '500'
	},
	ChatWindowContainer: {
		backgroundColor: '#ccc'
	},
	ChatCellMsgContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 12,
		position: 'relative',
		marginRight: 30
	},
	ChatCellMsgRightContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 12,
		alignSelf: 'flex-end',
		marginLeft: 30
	},
	ChatCellMsgTextContainer: {
		flexDirection: 'row',
		marginLeft: 10
	},
	ChatCellMsgTextRightContainer: {
		flexDirection: 'row',
		marginRight: 10
	},
	ChatCellMsgText: {
		fontSize: 14,
		padding: 10,
		backgroundColor: 'white'
	},
	ChatCellMsgTextRight: {
		fontSize: 14,
		padding: 10,
		backgroundColor: lime,
	},
	ChatCellImageRight: {
		width: 40,
		height: 40,
		resizeMode: 'cover',
		alignSelf: 'baseline',
		justifyContent: 'flex-end',
		position: 'absolute',
		right: 12,
		top: 0
	},
	loginContainer: {
		marginLeft: 10,
		marginRight: 10,
	},
	loginTextInput: {
		height: 35,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: '#ccc'
	},
	loginButton: {
		backgroundColor: lime,
		alignItems: 'center',
		justifyContent: 'center',
		height: 44
	},
	loginText: {
		color: 'white'
	}

});

export default styles;