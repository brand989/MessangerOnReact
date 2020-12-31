import React from 'react';
import PropTypes from 'prop-types';

import styles from '../style/Message.js';


export default class Message extends React.Component {
    
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }
    

    componentDidUpdate() {
      
      
    }
    

    render(){
        return <div style={{...styles.message, alignSelf: this.props.author === 'Робот' ? 'flex-start' : 'flex-end'}}>
            <div>{this.props.text}</div> 
            <div style={styles.author} >{this.props.author}</div>
        </div>
    }
}; 