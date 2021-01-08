import React from 'react';
import PropTypes from 'prop-types';

import MessageList from '../MessageList';
import SendMessage from '../SendMessage';

export default class Messages extends React.Component {

    state ={
        messages: [],
        // messagesList: {},
        // chatList: {},
        // idmessage: 0
    };
    
    static PropTypes = {
        chatId: PropTypes.number

    };

    static defaultProps = {
        chatId: -1
    }

    send = objmessage => {
       
        
        this.setState({messages: [...this.state.messages, objmessage ] })
        
        



        // this.setState({ messagesList: {...this.state.messagesList, ...{[this.state.idmessage]: objmessage}} }); 

        // if (this.state.chatList[this.props.chatId]) {
        //     this.state.chatList[this.props.chatId].push(this.state.idmessage)
        //  } else { 
        //     this.setState({chatList: {...this.state.chatList, ...{[this.props.chatId]: [] }  } })

        //     const timeoutchatList = setTimeout(
        //         () => {
        //             this.state.chatList[this.props.chatId].push(this.state.idmessage) 
        //         },
        //     50
        //     );
        //  }
        
        //  const timeoutidmessage = setTimeout(
        //     () => {
        //         this.setState({idmessage: this.state.idmessage + 1})
        //     },
        // 60
        // );

        
    };

    render () {
        return <>
        <h2>{this.props.chatId}</h2>
        <MessageList messages={this.state.messages} chatId={this.props.chatId}/>
        <SendMessage send={this.send} chatId={this.props.chatId}/>
        </>;

    }
}