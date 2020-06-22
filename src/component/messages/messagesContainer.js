import React from "react";
import Messages from './messages'
import {connect} from "react-redux"




const mapStateToProps = (state) =>{
	return ({
		messages: state.messages,
		log: state.userData.log
	})
}


const mapDispatchToProps = (dispatch) => {
	return ({
		addMessage: () =>{
			dispatch({type: "ADD_MESSAGE" })
		},
		messageValue: (messageValuer) =>{
			dispatch({type: "MESSAGE_VALUE", text: messageValuer})
		}
	})
}


export default connect(mapStateToProps,mapDispatchToProps)(Messages);