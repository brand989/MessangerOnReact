import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import '../../style/App.css';



 class Profile extends React.Component {

    render () {
        return <div className={'profile'}>
                <h2>Информация профиля</h2>
                    <span><b>Name</b> {this.props.profileStore.name}</span><br/>
                    <span><b>Age</b> {this.props.profileStore.age}</span>
            </div>
    }


}

const mapStateToProps = store => ({ 
    profileStore: store.profileReducer,

   }); 
    

   
   export default connect(mapStateToProps)(Profile);