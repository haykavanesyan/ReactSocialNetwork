import React from 'react';
import p from './profile.module.css';
import Profile_head from '../profile_head/profile_head';
import NewPost from '../newPost/newPost'
import NewPostContainer from '../newPost/newPostContainer'
import {Redirect} from 'react-router-dom'




const Profile = (props) => {
	

    return (
        <div className={p.profile}>
            <Profile_head profileInfo={props.profileInfo} userData={props.userData} status={props.status}/>
            <NewPostContainer />

        </div>
    );
};

export default Profile;