import React from 'react';

import Message from './Message.jsx';

import MessageList from './MessageList.jsx';





export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomePhrase: {'author': 'Робот','text':"Hello, I'm robot"},
            timeout: null,
            messages: [],
            interval: null,
            value: '',
        }
    }

    componentDidMount() {


    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    change = (event) => {
        this.setState({ value: event.target.value });
        console.log(event.target.value);
    }

    askRobot = () => {
        this.setState({ messages: [...this.state.messages,{'author': 'Робот', 'text': 'sorry, i can\'t help you'}] });
    }

    clickForForm = (event) => {
        event.preventDefault();
        this.setState({ messages: [...this.state.messages, {'author': 'Вы', 'text': this.state.value}] });
        this.setState({ value: '' });
        const timeout = setTimeout(
            () => {
                this.askRobot()
            },
            100
        );    

    }


    render() {
        console.log('render');
        return <main>
            <Message author={this.state.welcomePhrase.author} text={this.state.welcomePhrase.text} />
            <div> <MessageList messages={this.state.messages} /></div>

            <form onSubmit={this.clickForForm}>
                <input value={this.state.value} onChange={this.change} />
                <input type='submit' />
            </form>
        </main>;
    }
};

