/*import {profileReducer} from "./redux/profileReducer"
import {messageReducer} from "./redux/messageReducer"

let store = {

    _state: {
    app: {
        friends: [
            {name: "David"},
            {name: "Levon"},
            {name: "Diana"},
            {name: "Mko"},
            {name: "Makich"},
            {name: "Styop"},
            {name: "Lendrush"},

        ]},

    profile: {
        posts: [
            {post: "Srtid xorqum du lacumes isk irakanum zrum", like: 44},
            {post: "Kyanqi srtik ari indz mot qez ktam mi aravot", like: 159},
        ],

        textValue: ""},

    messages: {
        friendsData: [
            {name: 'David'},
            {name: 'Diana'},
            {name: 'Mko'},
            {name: 'kavij'},
            {name: 'Hayk'},
            {name: 'Levon'},

        ],

        messageValue: "",

        chatData: [
            {message: "bmboleo"},
            {message: "aaaaaaaaaaaw"},
            {message: "ASDDDDDxfs"},
            {message: "asaasaff"},
            {message: "adsafasfa"},
        ]},
  },


  backState(){
    return this._state
  },
    rerender(){},

subscribe(oblad) {
    this.rerender = oblad},

      dispatch(action) {
    
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messages = messageReducer(this._state.messages, action)
        this.rerender()


}}

export const addMessage = () =>{

        store.dispatch({type: "ADD_MESSAGE"})

    }
      
export const changeMessage = (e) => {
        let message = e.target.value
        store.dispatch({type: "MESSAGE_VALUE", message: message})
    }


export default store;*/