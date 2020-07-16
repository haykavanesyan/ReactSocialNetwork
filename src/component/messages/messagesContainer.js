import React from "react";
import Messages from './messages'
import {connect} from "react-redux"
import {withAuthRedirect} from '../HOC/hoc'
import {compose} from 'redux'




const mapStateToProps = (state) =>{
	return ({
		messages: state.messages,
		log: state.userData.log
	})
}


const mapDispatchToProps = (dispatch) => {
	return ({
		addMessage: (value) =>{
			dispatch({type: "ADD_MESSAGE", value })
		},
		messageValue: (messageValuer) =>{
			dispatch({type: "MESSAGE_VALUE", text: messageValuer})
		}
	})
}



export default compose(
	    connect(mapStateToProps,mapDispatchToProps),
        withAuthRedirect
	)(Messages)