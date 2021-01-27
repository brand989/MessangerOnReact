import {combineReducers} from 'redux';
import messageReducer from './messages';
import chatsReducer from './chats'
import profileReducer from './profile'
import {connectRouter} from 'connected-react-router'

export default history => combineReducers({
    router: connectRouter(history),
    messageReducer, chatsReducer, profileReducer
});