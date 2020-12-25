import React from 'react';
import PropTypes from 'prop-types';


export default class Message extends React.Component {
    
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }
    

    componentDidUpdate() {
      
      
    }
    

    render(){
        return <div>
            <span>{this.props.author} : </span>
            <span>{this.props.text}</span> 
        </div>
    }
}; 