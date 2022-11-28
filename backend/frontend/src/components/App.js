import React, { Component } from 'react';
import {createRoot} from 'react-dom/client';
import Header from './layout/Header';

class App extends Component{
    render(){
        return (
            <Header/>
            )
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);