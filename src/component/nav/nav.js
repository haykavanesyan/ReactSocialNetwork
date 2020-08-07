import React from 'react';
import n from './nav.module.css';
import {NavLink} from "react-router-dom";
import profile from "../../png/profile.png"
import feed from "../../png/feed.png"
import messages from "../../png/messages.png"
import users from "../../png/users.png"

const Nav = () => {
    return (
        <div className={n.nav}>
            <NavLink to="/profile"><div className={n.item}><img src={profile}/></div></NavLink>
            <div className={n.item}><img src={feed}/></div>
            <NavLink to="/messages"><div className={n.item}><img src={messages}/></div></NavLink>
            <NavLink to="/users"><div className={n.item}><img src={users}/></div></NavLink>
            
            
            

        </div>
    );
};

export default Nav;

