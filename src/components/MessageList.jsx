import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import '../style/MessageList.css'


export default class MessageList extends React.Component {

    
    static propTypes = {
        messages: PropTypes.array,
        chatId: PropTypes.number,
        // messagesList:  PropTypes.Object,
        // chatList: PropTypes.Object,
        // idmessage: PropTypes.number
    }
    

    static defaultProps = {
        messages: []
    }


    componentDidUpdate() {
    }




    render(){
        return <div className={'messages'}>
            {this.props.messages.filter(message => `${message.chatId}` === `${this.props.chatId}` ).map( (value, id) => <><Message text={value.text} author={value.author} key={`message_${id}`}/><br/></> )}
        </div>
    }
}; 