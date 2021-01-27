import {createStore, applyMiddleware, compose} from 'redux';
import middlewares from './middlewares';
import reducers from './reducers';

import {createBrowserHistory} from 'history';
import {routerMiddleware} from  'connected-react-router';   

export const history = createBrowserHistory();


export default function initStore() {
    return createStore( 
        reducers(history), 
        {}, 
        compose(
            applyMiddleware(routerMiddleware(history) ,...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},)
        );

        store.subsribe(() => console.log(store.getState()));    

        return store
};