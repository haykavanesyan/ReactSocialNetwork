import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {error, maxlength} from '../../validations/validate.js'
import {input} from './element.js'
import {loginThunk} from '../../redux/loginReducer.js'
import Profile from '../profile/profile.js'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import s from "./login.module.css"



const Login = (props) => {
	const onSubmit = (formData) =>{

       props.loginThunk(formData.login, formData.password, formData.rememberMe = true, formData.captcha)
       

        

	}
           
        if(props.log === true) {
            return <Redirect to="/profile" />
        }

		return (
         <div>
         <LoginReduxForm {...props}onSubmit={onSubmit}/>
         </div>
		)
}

let mapStateToProps = (state) => {
  debugger
    return ({
        log: state.userData.log,
        captcha: state.userData.captcha,
        err: state.userData.err
    })
}

export default connect(mapStateToProps, {loginThunk})(Login)




const max4 = maxlength(4)
const LoginForm = (props) => {
 
    return (
          <form className={s.form} onSubmit={props.handleSubmit}>
            
            <Field className={s.login} name="login" component={input} placeholder="login" validate={[error]}/><br/>
            <Field className={s.password} name="password" component={input} placeholder="Password" type="password" validate={[error,max4]}/><br/>
            <p className={s.error}>{props.err}</p>
            {props.captcha ? <img src={props.captcha}/> : null}<br/>
            {props.captcha ? <Field component={input} name="captcha" />: null}<br/>
        
            <Field className={s.remember} name="rememberMe" component="input" type="checkbox"/>Remember Me<br/>
            <button className={s.button}>login</button><br/>

          </form>
		)
}



const LoginReduxForm = reduxForm({
	form:'login'
})(LoginForm)


