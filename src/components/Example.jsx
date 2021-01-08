import React from 'react';
import Message from './Message.jsx';



export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            text: '',
            messeges: []
        };
    }



    click = (event) => {
        this.setState({ count: this.state.count + 1 })
    }

    change = () => {
        this.setState({ text: event.target.value })
    }

     


    render() {
        return <div>
            <Message text={`count click -  ${this.state.count}`} />
            <button onClick={this.click}>+1</button>
            <br />
            <Message text={this.state.text} />
            <input value={this.state.text} onChange={this.change} />
            

        </div >
    }


}