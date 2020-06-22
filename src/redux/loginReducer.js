import {logIn} from '../DAL/api'

let stateDefault = {
	id: null,
	email: null,
	login: null,
	log: false,
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
            	log: true
            }
         		
         	default:
         		return state
         }
     }


 export let  addData = (data) =>{return {type: "ADD_DATA", data: data}}
 export let  log = () =>{return {type: "LOG"}}



export let logInThunk = () =>{
   return (dispatch) => {
      logIn().then(data => {
            
            dispatch(addData(data.data))
            if(data.resultCode === 0){
                  dispatch(log())
            }
            
    })
   }
}