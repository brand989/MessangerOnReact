import React from 'react';
import '../style/ChatList.css'
import { List, ListItem } from 'material-ui';

export default class ChatList extends React.Component {

    render(){
        return <div className="chat-switch">Другие чаты
            <List component="nav" className="chat-switch-chatlist" aria-label="contacts">
                <ListItem button primaryText="Vika">
                </ListItem>
                <ListItem button primaryText="Petya"> 
                </ListItem>
                <ListItem button primaryText="Zina">
                </ListItem>
            </List>
        </div>
    }


}