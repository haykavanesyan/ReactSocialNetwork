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
import {connect} from 'react-redux'
import gif from './gif/200.gif'
import {initializatingThunk} from './redux/loginReducer'



class App extends React.Component{

    componentDidMount(){
        this.props.initializatingThunk()
    }

render(){
    
   return <div>{this.props.initialization ?

    <div className='app'>
                <HeadContainer/>
                <Nav/>
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer /> }/>
                    <Route path='/messages' render={() => <MessagesContainer /> }/>
                    <Route path='/users' render={() => <UsersContainer /> }/>
                    <Route path='/login' render={() => <Login /> }/>
                    
                </div>
                <Friend/>
            </div>

            :

        <img src={gif}/>
    
       }
       </div>

}

};


let mapStateToProps = (state) => ({
    initialization: state.userData.initialization
})


export default connect(mapStateToProps, {initializatingThunk})(App);
