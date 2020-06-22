import {getUsers,unFollow,Follow} from '../DAL/api'

let stateDefault = {
	users: [],

	activePage: 1,

	wait: false,

    buttonDisable: [],

}

export let usersReducer = (state = stateDefault, action) => {

	switch(action.type){
		case "FOLLOW":
 
		    return {
		    	...state,
		    	users: state.users.map((e) => {
		    		if(e.id === action.id){
		    			return {...e, followed: true}
		    		}
		    		return e
		    	})
		    }

		case "UNFOLLOW":

		    return {
		    	...state,
		    	users: state.users.map((e) => {
		    		if(e.id === action.id){
		    			return {...e, followed: false}
		    		}
		    		return e
		    	})
		    }
        case "SET_USERS":
            
            return {
                
                ...state,
                users: [...action.users]

            }

            case "CHANGE_PAGE":

              return {
              	...state,
              	activePage: action.page
              }

              case "WAIT":
              return{
              	...state,
              	wait: action.b
              }
              case "BUTTON_DISABLE":
              return{
              	...state,
              	wait: action.d,
              	buttonDisable: state.wait ?
                 [...state.buttonDisable, action.userId]
                 : state.buttonDisable.filter(id => id == action.userId)
              	
              }

		    default:
		    return state

	}

}

 export   let  follow = (id) => {return {type: "FOLLOW", id: id}}
export	let	 unfollow = (id) => { return {type: "UNFOLLOW", id: id}}
export	let	 setUsers = (users) => { return {type: "SET_USERS", users: users}}
export	let	 pageChanger = (page) => { return {type: "CHANGE_PAGE", page: page}}
export	let	 waitChange = (b) => { return {type: "WAIT", b: b}}
 export   let  button = (d,userId) => { return {type: "BUTTON_DISABLE",d,userId}}


export let getUsersThunk = (e, c) => {
	debugger
	return (dispatch) => {
          dispatch(waitChange(true))
          getUsers(e,c).then(data => {
          	dispatch(waitChange(false))
          dispatch(setUsers(data.items))
})

		}

}

export let unFollowThunk = (id) => {
	debugger
	return(dispatch) => {
		dispatch(button(true, id))
                    unFollow(id).then(data => {
                       if(data.resultCode == 0){dispatch(unfollow(id))}
                       
                      
                    })
                  dispatch(button(false, id))
	}
}


export let FollowThunk = (id) => {
	debugger
	return(dispatch) => {
		dispatch(button(true, id))
                    Follow(id).then(data => {
                       if(data.resultCode == 0){dispatch(follow(id))}
                       
                      
                    })
                  dispatch(button(false, id))
	}
}