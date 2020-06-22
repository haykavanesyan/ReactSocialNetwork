import React from "react";
import m from './messages.module.css'
import Friends from "./friends/friends";
import Chat from "./friends/chat";
import {addMessage,changeMessage} from '../../state.js'
import {Redirect} from 'react-router-dom'



const Messages = (props) => {

    let friendsElement = props.messages.friendsData.map( cikl => <Friends name={cikl.name}/>);
    let chatElement = props.messages.chatData.map( cikl => <Chat message={cikl.message}/>);

    
    let addMessager = () => {
        props.addMessage()
    }

let onChanger = (e) =>{
    let messageValuer = e.target.value
    props.messageValue(messageValuer)
}


    /*if(props.log === false) return <Redirect to={"/login"}/>*/

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
                <textarea value={props.messages.messageValue} onChange={onChanger} ></textarea>
                <button onClick={addMessager}>Send</button>
                </div>
               </div>
        </div>
    )
};


export default Messages;