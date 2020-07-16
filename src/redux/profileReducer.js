import {profileInformation,getStatus} from '../DAL/api'

let stater = {
        posts: [],
        textValue: "",
        profileInfo: null,
        status: ""
}
 
export let profileReducer = (state = stater, action) => {
	
	   switch (action.type) {
	   	case "ADD_POST": 
	   	return {
	   		...state,
	   		posts: [{post: action.value, like: 0}, ...state.posts],
	   	}
	   	case "TEXT_VALUES":
	   	return {
	   		...state,
	   		textValue: action.text
	   	}

	   	case "SET_USERS_PROFILE":
	   	return {
	   		...state,
	   		profileInfo: action.info
	   	}
	   	case "SET_STATUS":
	   	return {
	   		...state,
	   		status: action.status
	   	}
	    default:
	        return state;
}
}

export let setUsersProfile = (info) => {return {type: "SET_USERS_PROFILE", info: info}}
export let setStatus = (status) => {return {type: "SET_STATUS", status: status}}


export let profileInformationThunk = (id) => {
	return (dispatch) => {
		profileInformation(id).then(data =>
              dispatch(setUsersProfile(data))
			)
	}
}


export let getStatusThunk = (id) => {
	return (dispatch) => {
          getStatus(id).then(res => {
          	dispatch(setStatus(res.data))
          })
	}
}

