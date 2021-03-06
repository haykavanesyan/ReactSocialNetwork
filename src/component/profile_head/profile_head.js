import React from 'react';
import p from './profile_head.module.css';
import Status from './status'
import profile from '../../gif/profile.png'


const Profile_head = (props) => {
	if(!props.profileInfo){
		return <div></div>
	}
    return (
       <div className={p.profile_head}>
          <div className={p.profilePicture}>
           <img src={!props.profileInfo.photos.large ? profile : props.profileInfo.photos.large} />
  
<Status userData={props.userData} status={props.status} profileInfo={props.profileInfo}/>
           <div className={p.name}>

<p>Name: {props.profileInfo.fullName}</p>
           <p>Email:</p>
           <p>Linkedin:</p>
           <p>Phone:</p>
           </div>
           </div>

           
       </div>
    );
}

export default Profile_head;