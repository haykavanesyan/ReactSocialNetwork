import React from 'react'
import {Redirect} from 'react-router-dom'


export let withAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
	if(!props.log) return <Redirect to={"/login"}/>

	return <Component{...props}/>
}
return RedirectComponent
}

