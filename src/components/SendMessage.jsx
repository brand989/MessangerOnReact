import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import '../style/SendMessage.css';

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
            this.props.send({'message': this.state.message, 'author': 'me' });
            this.setState({message:''})
        }
    };
 

    send = () => {
        this.props.send({'message': this.state.message, 'author': 'me' });
        this.setState({message:''})
        
    };

    handleChange = event => {
        this.setState({message: event.target.value})
        
    };
  

    render(){
        return <div className={'sendmessage'}>
            <TextField 
                ref={ this.textInput }
                value={this.state.message}  
                onChange={this.handleChange}
                fullWidth={true}
                multiLine={true}
                onKeyUp={ (event) => this.handleKeyUp(event)}
                />
            <Button variant="contained" onClick={this.send} className={'button-sendmessage'}>Send</Button>
        </div>
    }   
}