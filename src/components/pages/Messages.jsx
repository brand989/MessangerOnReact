import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import MessageList from '../MessageList';
import SendMessage from '../SendMessage';

import {sendMessage} from '../../store/actions/message';
import {sendChat} from '../../store/actions/chat';

class Messages extends React.Component {

   

    static PropTypes = {
        chatId: PropTypes.number

    };

    static defaultProps = {
        chatId: 1
    }

    send = objmessage => {
        const newMesId = this.props.messagesStore.length;

    
        this.props.sendMessage(objmessage.message, objmessage.author, this.props.chatId);
        this.props.sendChat(this.props.chatId, `Chat ${this.props.chatId}`, newMesId )

    };

    componentDidUpdate(prevProps, prevState){

        if(prevProps.messagesStore.length < this.props.messagesStore.length &&
            this.props.messagesStore[this.props.messagesStore.length - 1].author === 'me'){
                setTimeout(
                    () => this.send({'message': 'sorry, i can\'t help you' , 'author': 'Робот' }),
                    1000
                );

        }
    };

    render() {
        return <>
            <h2> Аккаунт {this.props.profileStore.name}:  {this.props.chatsStore[this.props.chatId].name}</h2>
            <MessageList messages={this.props.messagesStore.filter((value, id) => this.props.chatsStore[this.props.chatId].messages.includes(id))}  />
            
            <SendMessage send={this.send} chatId={this.props.chatId} />
        </>;

    }
}

const mapStateToProps = store => ({ 
 messagesStore: store.messageReducer,
 chatsStore: store.chatsReducer,
 profileStore: store.profileReducer,
}); 
 
const mapDispatchToProps = {
    sendMessage: sendMessage,
    sendChat: sendChat
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);