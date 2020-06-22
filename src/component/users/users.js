import React from 'react'
import s from './users.module.css'
import {NavLink} from "react-router-dom"
import * as axios from 'axios'


let Users = (props) =>{
          
 return <div>

 {
  props.users.map((e) => {
          return (
               <div className={s.block}>
               <NavLink to={'/profile/'+e.id}><div className={s.ava}><img src={e.photos.small}/></div></NavLink>
               <div>
               {e.name}
               </div>
                <div>
               {e.country}
               </div>
                
                <div>
                  <button disabled={props.buttonDisable.some(id => id === e.id)}  onClick={e.followed ? 
                    
                   () => {  
                
                    props.unFollowThunk(e.id)
                  }
                      
                    : 

                   () => { 
                    props.FollowThunk(e.id)}
                  }>

                  {e.followed?"unfollow":"follow"}
                  

                  </button>
                </div>
               </div>
            )
        })
}
</div>
 
}



export default Users