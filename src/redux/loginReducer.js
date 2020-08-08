import {logIn, login, logout, captchaAPI} from '../DAL/api'



let stateDefault = {
	id: null,
	email: null,
	login: null,
	log: false,
   err: '',
   resultCode: null,
   initialization: false,
   captcha: null

}


export let loginReducer = (state = stateDefault, action) =>{

         switch (action.type) {
         	
               case "ADD_DATA":
               return {
                  ...state,
                  ...action.data
               }
            case "LOG":
            return {
            	...state,
            	log: action.b
            }
            case "ERROR":
            return {
               ...state,
               err: action.err,
            }
            case "INITIAL":
            return {
               ...state,
               initialization: true
             }
             case "GET_CAPTCHA":
             return{
              ...state,
              captcha: action.url
             }
         		
         	default:
         		return state
         }
     }


 export let  addData = (data) =>{return {type: "ADD_DATA", data: data}}
 export let  log = (b) =>{return {type: "LOG", b}}
 export let  error = (err) => {return {type: "ERROR", err}}
 export let initializating = () => {return {type: "INITIAL"}}
 export let getCaptcha = (url) => {return {type: "GET_CAPTCHA", url}}






 
export let logInThunk = () => (dispatch) => {
    return  logIn().then(data => {
            
            dispatch(addData(data.data))
            if(data.resultCode === 0){
                  dispatch(log(true))
            }
            
    })
   }


export let initializatingThunk = () => (dispatch) => {

        logIn().then(data => {
            
            dispatch(addData(data.data))
            if(data.resultCode === 0){
                  dispatch(log(true))
            }
            dispatch(initializating())
            
    })

      
   }


export let loginThunk = (email, password, rememberMe, captcha) =>{
   return(dispatch) => login(email, password, rememberMe, captcha).then(res => {
         
         if(res.data.resultCode === 0){
           logIn().then(data => {
            dispatch(addData(data.data))
            if(data.resultCode === 0){
                  dispatch(log(true))
            }

            
    })
         }
         else if(res.data.resultCode === 1){
          dispatch(error(res.data.messages[0]))
         }
      else if(res.data.resultCode === 10){
        
        captchaAPI().then(res =>{
        dispatch(getCaptcha(res.data.url))
        })
      }
      console.log()
      })
   
   

}


export let logoutThunk = () =>{
   return (dispatch) => {
      logout().then(res => {
          if(res.data.resultCode === 0){
           dispatch(addData(null))
           dispatch(log(false))
         }
      })
          
          
       }
    }