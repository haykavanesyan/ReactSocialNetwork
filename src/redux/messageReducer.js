let stater = {
	
        friendsData: [
            {name: 'David'},
            {name: 'Diana'},
            {name: 'Mko'},
            {name: 'kavij'},
            {name: 'Hayk'},
            {name: 'Levon'},

        ],
        messageValue: "",
        chatData: []
        }


export let messageReducer = (state = stater, action) => {
      switch (action.type) {
         case "ADD_MESSAGE":

            return {
              ...state,
              chatData: [...state.chatData, {message: state.messageValue}],
              messageValue: ""
            }
         case "MESSAGE_VALUE":
             return {
              ...state,
              messageValue: action.text
             }
         default:
              return state
      }
}