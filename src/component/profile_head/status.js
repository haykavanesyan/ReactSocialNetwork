import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getStatus,changeStatus} from '../../DAL/api'
import style from './profile_head.module.css'

let Status = (props) =>{


    let [boolState, boolStateChange] = useState(true)
    let [valueState, valueStateChange] = useState(props.status)
    
    let change = (e) => {
        changeStatus(e.target.value)
    	valueStateChange(e.target.value)  	
    }

   let  activateMode = () => {
    	boolStateChange(true)
    }
   let disableMode = () => {
    	boolStateChange(false)
    }
		return (

			<div className={style.statusDiv}>
             {boolState ? <i className={style.status} onClick={props.userData.id === props.profileInfo.userId?disableMode:null}> {!!valueState && valueState.length > 0 ? valueState : props.status} </i> : 
             	<input onBlur={activateMode} value={valueState.length > 0 ? valueState : props.status} onChange={change}/> }
             	</div>

			)
	}
          




export default Status