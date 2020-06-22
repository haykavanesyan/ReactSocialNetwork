import React from 'react'
import Profile from './profile'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {withRouter} from "react-router-dom";
import {profileInformationThunk} from '../../redux/profileReducer'


class ProfileRouter extends React.Component{

	 componentDidMount(){
	 	  
          let id = this.props.match.params.userId
          {!id ? id = 2 : id = this.props.match.params.userId}
          this.props.profileInformationThunk(id)
}


render(){
	return <Profile {...this.props}/>
}
}


let mapStateToProps = (state) =>{
	return({
		profileInfo: state.profile.profileInfo,
		log: state.userData.log
	})
}



const ProfileAPI =  withRouter(ProfileRouter)

export default connect(mapStateToProps,{profileInformationThunk})(ProfileAPI)