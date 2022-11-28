import React, { Component, Fragment } from 'react';
import {createRoot} from 'react-dom/client';


import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <div className="container">
                        <Dashboard/>
                    </div>
                </Fragment>
            </Provider>
            
            )
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);