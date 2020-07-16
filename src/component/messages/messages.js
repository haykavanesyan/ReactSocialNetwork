import React from "react";
import m from './messages.module.css'
import Friends from "./friends/friends";
import Chat from "./friends/chat";
import {addMessage,changeMessage} from '../../state.js'
import {Redirect} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import {textarea} from '../login/element'


const Messages = (props) => {

    let friendsElement = props.messages.friendsData.map( cikl => <Friends name={cikl.name}/>);
    let chatElement = props.messages.chatData.map( cikl => <Chat message={cikl.message}/>);

    
    let addMessager = (value) => {
        props.addMessage(value.new_message)
    }

let onChanger = (e) =>{
    let messageValuer = e.target.value
    props.messageValue(messageValuer)
}



    return (
        <div className={m.messages}>
            <div className={m.friends}>
                {friendsElement}
            </div>
            <div className={m.chat}>
               <div>
                {chatElement}
                </div>
                <div className={m.send}>
                    <MessageFormRedux onSubmit={addMessager} />
                </div>
               </div>
        </div>
    )
};

const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={textarea} name="new_message" placeholder="Write your message"/>
                <div className={m.button}>
                <button>Senc</button>

        </div>
    </form>
}

const MessageFormRedux = reduxForm({form: "AddNewMessage"})(MessageForm)


export default Messages;