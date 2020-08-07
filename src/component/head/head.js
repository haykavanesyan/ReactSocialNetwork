import React from 'react';
import h from './head.module.css';
import {NavLink} from "react-router-dom";



const Head = (props) => {
    return (
    	
        <div className={h.head}>
            <span><NavLink to="/">React Social Network</NavLink></span>

               <div className={h.login}>
           {props.userData.log ? <div>{props.userData.login} <button href="/login" onClick={props.logoutThunk}>LogOut</button></div> : <NavLink to="/login">login</NavLink>}
        </div> 

        </div>

        
    );
};

export default Head;