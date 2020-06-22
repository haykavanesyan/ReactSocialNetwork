import React from 'react';
import h from './head.module.css';
import {NavLink} from "react-router-dom";


const Head = (props) => {
    return (
    	
        <div className={h.head}>
            <p><NavLink to="/">HEAD</NavLink></p>

               <div className={h.login}>
           {props.userData.log ? props.userData.login : <NavLink to="/login">login</NavLink>}
        </div> 

        </div>

        
    );
};

export default Head;