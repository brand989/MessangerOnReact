import React from 'react';
import PropTypes from 'prop-types';

import {FlatButton} from 'material-ui';
import {TextField} from 'material-ui';
// import Button from 'material-ui/core/Button'


export default class SendMessage extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    
    state = {
        message: ''
    };

    static propTypes = {
        send: PropTypes.func.isRequired,
        chatId: PropTypes.number
    };

    componentDidMount() {
        this.textInput.current.focus();
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.props.send({'text': this.state.message, 'author': 'me', 'chatId': this.props.chatId });
            this.setState({message:''})
        }
    };
 

    send = () => {
        this.props.send({'text': this.state.message, 'author': 'me', 'chatId': this.props.chatId });
        this.setState({message:''})
        
    };

    handleChange = event => {
        this.setState({message: event.target.value})
        
    };
  

    render(){
        return <div>
            <TextField 
                ref={ this.textInput }
                value={this.state.message}  
                onChange={this.handleChange}
                fullWidth={true}
                multiLine={true}
                onKeyUp={ (event) => this.handleKeyUp(event)}
                />
            <FlatButton variant="contained" onClick={this.send}>Send</FlatButton>
        </div>
    }   
}