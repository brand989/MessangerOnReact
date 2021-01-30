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
        this.props.sendMessage(objmessage.message, objmessage.author, this.props.chatId, newMesId);
        this.props.sendChat(this.props.chatId, `Chat ${this.props.chatId}`, newMesId )

    };


    sendMessageForApi(chatId, chatName, messages){

        messages.map(value => {
            this.props.sendMessage(value.message, value.author, chatId);
            this.props.sendChat(chatId, chatName, value.Id )
        })


    }

    componentDidUpdate(prevProps, prevState){

        // if(prevProps.messagesStore.length < this.props.messagesStore.length &&
        //     this.props.messagesStore[this.props.messagesStore.length - 1].author === 'me' &&
        //     prevProps.messagesStore.length > 10){
        //         setTimeout(
        //             () => this.send({'message': 'sorry, i can\'t help you' , 'author': 'Робот' }),
        //             1000
        //         );

        // }
    };

    componentDidMount(){
        fetch('/api/chats.json')
        .then(response => response.json())
        .then(response => {
            Object.entries(response).map( value => {
                this.sendMessageForApi(value[0], value[1].name, value[1].messages)
            })
        })
        .catch(err => console.log('err', err))

    }

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