import React from 'react';
import './App.css';
import HeadContainer from './component/head/headContainer'
import Nav from './component/nav/nav'
import ProfileContainer from './component/profile/profileContainer'
import Friend from './component/friend/friend'
import MessagesContainer from './component/messages/messagesContainer'
import UsersContainer from './component/users/usersContainer'
import {Route} from "react-router-dom";
import Login from './component/login/login'

const App = (props) => {

    return (
        
            <div className='app'>
                <HeadContainer/>
                <Nav/>
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer /> }/>
                    <Route path='/messages' render={() => <MessagesContainer /> }/>
                    <Route path='/users' render={() => <UsersContainer /> }/>
                    <Route path='/login' render={() => <Login /> }/>
                    
                </div>
                <Friend store={props.store}/>
            </div>
       );

};



export default App;
