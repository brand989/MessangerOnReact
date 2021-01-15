import {SEND_CHAT} from '../actions/chat'

const initState = {
    1: {
        name: 'Chat 1',
        messages: [0, 1]
    },
    2: {
        name: 'Chat 2',
        messages: [3, 4]
    },
    3: {
        name: 'Chat 3',
        messages: [5, 6]
    },
    4: {
        name: 'Chat 4',
        messages: [7, 8]
    }
};

export default function chatsReducer(store = initState, action) {
    switch(action.type){
        case SEND_CHAT:
            return { ...store,  [action.chatId]: { name: action.name, messages: [...store[action.chatId].messages, action.idMessage] } }

        default:
            return store;
    }
}; 