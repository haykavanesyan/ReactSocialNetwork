import React from 'react'
import Head from './head'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {addData, log, logInThunk} from '../../redux/loginReducer'


class HeadContainer extends React.Component{
	componentDidMount(){
           
          this.props.logInThunk()
            
  
	}

render(){
	return <Head {...this.props} />
}

}


let mapStateToProps=(state)=>{
	return({
         userData: state.userData
	})
}



export default connect(mapStateToProps, {addData, log, logInThunk})(HeadContainer)