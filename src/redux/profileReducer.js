import {profileInformation} from '../DAL/api'

let stater = {
        posts: [],
        textValue: "",
        profileInfo: null,
}
 
export let profileReducer = (state = stater, action) => {
	
	   switch (action.type) {
	   	case "ADD_POST": 
	   	return {
	   		...state,
	   		posts: [{post: state.textValue, like: 0}, ...state.posts],
	   		textValue: ""
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
	    default:
	        return state;
}
}

export let setUsersProfile = (info) => {return {type: "SET_USERS_PROFILE", info: info}}


export let profileInformationThunk = (id) => {
	return (dispatch) => {
		profileInformation(id).then(data =>
              dispatch(setUsersProfile(data))
			)
	}
}

