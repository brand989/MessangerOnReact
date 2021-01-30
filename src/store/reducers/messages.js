import {SEND_MESSAGE} from '../actions/message'

const initState = [
    
];

export default function messagesReducer(store = initState, action) {
    switch(action.type){
        case SEND_MESSAGE:
            const newMesId = store.length;
            return  [...store, {message: action.message, author: action.author, id: newMesId}] 
        default:
            return store;
    }
}; 