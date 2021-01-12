import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {FlatButton} from 'material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// import MessageList from './MessageList.jsx';
// import SendMessage from './SendMessage.jsx';
// import Header from './Header.jsx';
// import ChatList from './ChatList.jsx';

import Messages from './pages/Messages'
import Profile from './pages/Profile'

import '../style/App.css'




export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomePhrase: {},
            timeout: null,
            interval: null,
            value: '',
            chatList: [1,2,3]
                
            
        }
    }


    

    componentDidMount() {


    }

    componentDidUpdate() {

        // if(this.state.messages[this.state.messages.length-1].author === 'me' ){
        //     const timeout = setTimeout(
        //         () => {
        //             this.askRobot()
        //         },
        //     2000
        //     );  
        // }

    }

    componentWillUnmount() {

    }



    askRobot = () => {
        this.setState({ messages: [...this.state.messages,{'author': 'Робот', 'text': 'sorry, i can\'t help you'}] });
    }

   

    send = objmessage => {
        this.setState({ messages: [...this.state.messages,  objmessage] });   
    };

    addChat = () => {
        console.log(this.state.chatList[this.state.chatList.length - 1]);
        let numberChat = this.state.chatList[this.state.chatList.length - 1] + 1;
        this.setState({ chatList: [...this.state.chatList,  numberChat] });   
    }

    render() {
        return <MuiThemeProvider>
                    <main className="main">
                        <BrowserRouter>
                            {/* <Header  />
                            <div className="chat">
                                <ChatList />
                                <MessageList messages={this.state.messages} />
                            </div>
                            <SendMessage send={this.send}/> */}
                            <nav>
                                {this.state.chatList.map( (value,id) => <Link to={`/chat/${value}`}>Чат {value} </Link> )}
                                <Link to="/profile">profile</Link>
                                <FlatButton variant="contained" onClick={this.addChat}>add Chat</FlatButton>
                            </nav>
                            <Switch>
                                <Route exact path="/" component={Messages}/>
                                <Route exact path="/profile" component={Profile}/>
                                <Route path="/chat/:chatId" render={ obj => <Messages chatId={obj.match.params.chatId}/>}/>
                                {/* <Route path="/chat/2">
                                    <Messages chatId={2} />
                                </Route> */}
                            </Switch>
                        </BrowserRouter>
                    </main>
                </MuiThemeProvider>
    }
}

