import {logIn, login, logout} from '../DAL/api'



let stateDefault = {
	id: null,
	email: null,
	login: null,
	log: false,
   error: '',
   resultCode: null,
   initialization: false
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
            case "LOGIN":
            return {
               ...state,
               error: action.error,
               resultCode: action.resultCode
            }
            case "INITIAL":
            return {
               ...state,
               initialization: true
             }
         		
         	default:
         		return state
         }
     }


 export let  addData = (data) =>{return {type: "ADD_DATA", data: data}}
 export let  log = (b) =>{return {type: "LOG", b}}
 export let  logining = (error, resultCode) => {return {type: "LOGIN", error, resultCode}}
 export let initializating = () => {return {type: "INITIAL"}}




 
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


export let loginThunk = (email, password, rememberMe) =>{
   
   return(dispatch) => login(email, password, rememberMe).then(res => {
         
         if(res.data.resultCode === 0){
           logIn().then(data => {
            
            dispatch(addData(data.data))
            if(data.resultCode === 0){
                  dispatch(log(true))
            }
            
    })
         }
      
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