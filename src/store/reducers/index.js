import {combineReducers} from 'redux';
import messageReducer from './messages';
import chatsReducer from './chats'
import profileReducer from './profile'

export default combineReducers({
    messageReducer, chatsReducer, profileReducer
});