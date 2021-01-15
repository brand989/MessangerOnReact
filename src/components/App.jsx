import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';



import Router from './Router';
import initStore from '../store';



import '../style/App.css';




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
        return       <main className="main">
                        <Provider store={initStore()}>
                            <BrowserRouter>
                                
                                <nav className="chat-switch">
                                    {this.state.chatList.map( (value,id) => <Link to={`/chat/${value}`} className="chat-switch-chatlist">Чат {value} </Link>  )}
                                    <Link to="/profile" variant="body2"  className="chat-switch-chatlist">Профиль</Link>
                                    {/* <FlatButton variant="contained" onClick={this.addChat}>add Chat</FlatButton> */}
                                </nav>
                                <Router />
                            </BrowserRouter>
                        </Provider>
                    </main>
                
    }
}

