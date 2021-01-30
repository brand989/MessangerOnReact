import {SEND_MESSAGE, sendMessage} from '../actions/message';

export default store => next => action => {
    const dispatch = store.dispatch
    const messages = store.getState().messagesReducer;

    switch(action.type){
        case SEND_MESSAGE:
            if(action.author === 'me' &&
            action.newMesId > 8 ){
                console.log('need send')

                setTimeout(
                    () => dispatch(sendMessage( 'sorry, i can\'t help you', 'robot', action.chatId)),
                    1000
                );
            }
            break;
    }

    return next(action)
};