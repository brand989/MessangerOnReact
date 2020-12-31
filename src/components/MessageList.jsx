import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

import '../style/MessageList.css'


export default class MessageList extends React.Component {
    
    static propTypes = {
        messages: PropTypes.array
    }
    

    static defaultProps = {
        messages: []
    }


    componentDidUpdate() {

    }


    render(){
        return <div className={'messages'}>
            {this.props.messages.map((value, id) => <><Message text={value.text} author={value.author} key={`message_${id}`}/><br/></> )}
        </div>
    }
}; 