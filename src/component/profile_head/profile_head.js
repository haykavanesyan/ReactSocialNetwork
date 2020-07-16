import React from 'react';
import p from './profile_head.module.css';
import Status from './status'
import profile from '../../gif/profile.svg'


const Profile_head = (props) => {
	if(!props.profileInfo){
		return <div></div>
	}
    return (
       <div className={p.profile_head}>
          <div className={p.profilePicture}>
           <img src={!props.profileInfo.photos.large ? profile : props.profileInfo.photos.large} />
           <div className={p.name}><span>{props.profileInfo.fullName}</span></div>
           </div>

           <Status userData={props.userData} status={props.status} profileInfo={props.profileInfo}/>
       </div>
    );
}

export default Profile_head;