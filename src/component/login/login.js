import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {error, maxlength} from '../../validations/validate.js'
import {input} from './element.js'
import {loginThunk} from '../../redux/loginReducer.js'
import Profile from '../profile/profile.js'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



const Login = (props) => {
	const onSubmit = (formData) =>{

       props.loginThunk(formData.login, formData.password, true)
       

        

	}
           
        if(props.log === true) {
            return <Redirect to="/profile" />
        }

		return (
         <div>
         <LoginReduxForm onSubmit={onSubmit}/>
         </div>
		)
}

let mapStateToProps = (state) => {
    return ({
        log: state.userData.log
    })
}

export default connect(mapStateToProps, {loginThunk})(Login)




const max4 = maxlength(4)
const LoginForm = (props) => {
	debugger
    return (
          <form onSubmit={props.handleSubmit}>
            
            <Field name="login" component={input} placeholder="login" validate={[error]}/><br/>
            <Field name="password" component={input} placeholder="Password" type="password" validate={[error,max4]}/><br/>
            <Field name="rememberMe" component="input" type="checkbox"/>Remember Me<br/>
            <button>login</button><br/>

          </form>
		)
}



const LoginReduxForm = reduxForm({
	form:'login'
})(LoginForm)


