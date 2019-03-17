import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Auth from './Auth'
import DashBoard from './DashBoard'
import reducers  from './reducer'
import './config/config'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
    ReactDOM.render
    ((
        <Provider store={store}>
            <Router>
               <Switch>
                   <Route path='/login' component={Auth}></Route>
                   <Route path='/dashboard' component={DashBoard}></Route>
               </Switch> 
            </Router>
         
        </Provider>
    ), document.getElementById('root')  
    ) 
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
