import React from 'react';
import n from './nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={n.nav}>
            <NavLink to="/profile"><div className={n.item}>Profile</div></NavLink>
            <div className={n.item}>Feeds</div>
            <NavLink to="/messages"><div className={n.item}>Messages</div></NavLink>
            <NavLink to="/users"><div className={n.item}>Find Users</div></NavLink>
            
            
            

        </div>
    );
};

export default Nav;

