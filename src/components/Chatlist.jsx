import React from 'react';
import PropTypes from 'prop-types';
import initStore, {history} from '../store';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";


import { push } from 'connected-react-router';
import { List, ListItem, ListItemText  } from '@material-ui/core/';



class ChatList extends React.Component {

    
    static propTypes = {
        push: PropTypes.func.isRequired
 
    }


    componentDidUpdate() {
    }

    handleNavigate = (link) => {
        this.props.push(link);
     };


    render(){
        return <div>
            {Object.entries(this.props.chatsStore).map( (value, id) => <ListItem 
                                                        button
                                                        onClick={ () => this.handleNavigate(`/chat/${value[0]}`) }
                                                        >
                                                        <ListItemText primary={`${value[1].name}`} />
                                                    </ListItem>)}
                </div>
    }
}; 


const mapStateToProps = store => ({
    chatsStore: store.chatsReducer,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
 