import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router'
import ChatList from './Chatlist'

import Router from './Router';
import initStore, {history} from '../store';



import '../style/App.css';

const { store, persistor } = initStore(); 


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomePhrase: {},
            timeout: null,
            interval: null,
            value: '',
            chatList: [1,2,3],       
            
        }
    }


 
    componentDidMount() {


    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }



    send = objmessage => {
        this.setState({ messages: [...this.state.messages,  objmessage] });   
    };

   

    render() {
        return       <main className="main">
                        <Provider store={store}>
                            <PersistGate loading={ null } persistor={ persistor }>
                                <ConnectedRouter history={history}>
                                    <nav className="chat-switch">                                   
                                        <ChatList />
                                        <Link to="/profile" variant="body2"  className="chat-switch-chatlist">Профиль</Link>
                                    </nav>
                                    <Router />
                                </ConnectedRouter>
                            </PersistGate>
                        </Provider>
                    </main>
                
    }
}

