import {createStore, applyMiddleware, compose} from 'redux';
import middlewares from './middlewares';
import reducers from './reducers';

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { persistStore, persistReducer } from 'redux-persist';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from  'connected-react-router';   

export const history = createBrowserHistory();

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messagesReducer', 'chatsReducer'],
 };



function initStore() {
    const innitialStore = {};
    
   const store = createStore( 
        
        persistReducer(persistConfig, reducers(history)),
        innitialStore,
        compose(
            applyMiddleware(routerMiddleware(history) ,...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},)
        );

        const persistor = persistStore(store);

        return { store, persistor }
};


export default  initStore