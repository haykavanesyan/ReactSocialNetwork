import React from 'react';
import p from './profile_head.module.css';



const Profile_head = (props) => {
	if(!props.profileInfo){
		return <div></div>
	}
    return (
       <div className={p.profile_head}>
          <div className={p.profilePicture}>
           <img src={props.profileInfo.photos.large} />
           </div>
       </div>
    );
}

export default Profile_head;