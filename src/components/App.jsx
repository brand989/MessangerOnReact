import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import MessageList from './MessageList.jsx';
import SendMessage from './SendMessage.jsx';
import Header from './Header.jsx';
import ChatList from './ChatList.jsx';


import '../style/App.css'




export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomePhrase: {},
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



    askRobot = () => {
        this.setState({ messages: [...this.state.messages,{'author': 'Робот', 'text': 'sorry, i can\'t help you'}] });
    }

   

    send = objmessage => {
        console.log(objmessage)
        this.setState({ messages: [...this.state.messages,  objmessage] });
        const timeout = setTimeout(
            () => {
                this.askRobot()
            },
        2000
        );    
    };


    render() {
        return <MuiThemeProvider>
                    <main className="main">
                        <Header  />
                        <div className="chat">
                            <ChatList />
                            <MessageList messages={this.state.messages} />
                        </div>
                        <SendMessage send={this.send}/>
                    </main>
                </MuiThemeProvider>
    }
}

