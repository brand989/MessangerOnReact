import {SEND_CHAT} from '../actions/chat'

const initState = {
 
};

export default function chatsReducer(store = initState, action) {
    switch(action.type){
        case SEND_CHAT:
            return { ...store,  [action.chatId]: { name: action.name, messages: [...store[action.chatId].messages, action.idMessage] } }

        default:
            return store;
    }
}; 