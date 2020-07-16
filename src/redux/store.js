import {combineReducers, createStore, applyMiddleware} from "redux"
import {profileReducer} from "./profileReducer"
import {messageReducer} from "./messageReducer"
import {usersReducer} from "./usersReducer"
import {loginReducer} from "./loginReducer"
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
	profile: profileReducer,
	messages: messageReducer,
	usersPage: usersReducer,
	userData: loginReducer,
	form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store