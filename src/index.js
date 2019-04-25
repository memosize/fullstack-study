import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import reducers  from './reducer'
import './config'
import Register from './container//register/Register'
import Login from './container/login/Login'
import AuthRoute from './component/authroute/authroute'
import  './index.css'
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
)) 
    function Boss(){
        return<h2>boss page </h2>
    }
    ReactDOM.render
    ((
        <Provider store={store}>
            <Router>
                    <AuthRoute/>
                    <Route path='/boss' component={Boss}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
            </Router>
         
        </Provider>
    ), document.getElementById('root')  
    ) 
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
