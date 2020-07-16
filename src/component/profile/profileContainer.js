import React from 'react'
import Profile from './profile'
import {connect} from 'react-redux'
import {compose} from 'redux'
import * as axios from 'axios'
import {withRouter} from "react-router-dom";
import {profileInformationThunk,getStatusThunk} from '../../redux/profileReducer'
import {withAuthRedirect} from '../HOC/hoc'



class ProfileRouter extends React.Component{

	 componentDidMount(){
	 	  
          let id = this.props.match.params.userId
          {!id ? id = this.props.userData.id : id = this.props.match.params.userId}
          this.props.profileInformationThunk(id)
          this.props.getStatusThunk(id)

}


render(){
	return <Profile {...this.props}/>
}
}


let mapStateToProps = (state) =>{
	return({
		profileInfo: state.profile.profileInfo,
		status: state.profile.status,
		log: state.userData.log,
		userData: state.userData,

	})
}




export default compose(
	connect(mapStateToProps,{profileInformationThunk,getStatusThunk}),
	withRouter,
	withAuthRedirect
)
(ProfileRouter)

