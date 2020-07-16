import React from 'react'
import {connect} from 'react-redux'
import {getStatus,changeStatus} from '../../DAL/api'
import style from './profile_head.module.css'

class Status extends React.Component {

    state = {
    	bool: true,
        value: this.props.status
    }
    
    change = (e) => {
        changeStatus(e.target.value)
    	this.setState({
    		value: e.target.value
    	}) 
        
    	
    }

    activateMode = () => {
    	this.setState({
    		bool: true
    	})
    }
    disableMode = () => {
    	this.setState({
    		bool: false
    	})
    }

	render() {
debugger
		return (

			<div className={style.statusDiv}>
             {this.state.bool ? <span className={style.status} onClick={this.props.userData.id === this.props.profileInfo.userId?this.disableMode:null}> {this.props.status} </span> : 
             	<input onBlur={this.activateMode} value={this.state.value} onChange={this.change}/> }
             	</div>

			)
	}
          

        
		
}




export default Status