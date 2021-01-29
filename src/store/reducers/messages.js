import {SEND_MESSAGE} from '../actions/message'

const initState = [
    { message: 'test0', author: 'me', id: 0 },
    { message: 'test1', author: 'me', id: 1 },
    { message: 'test2', author: 'me', id: 2 },
    { message: 'test3', author: 'me', id: 3 },
    { message: 'test4', author: 'me', id: 4 },
    { message: 'test5', author: 'me', id: 5 },
    { message: 'test6', author: 'me', id: 6 },
    { message: 'test7', author: 'me', id: 7 },
    { message: 'test8', author: 'me', id: 8 },
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