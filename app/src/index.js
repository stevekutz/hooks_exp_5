import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateInspector } from 'reinspect';

// import addReactNDevTools from 'reactn-devtools';
// addReactNDevTools();

function Wrapper() {
    return (
        <StateInspector>
            <App/>
        </StateInspector>
    )
}



ReactDOM.render(

      <Wrapper />
    
    , document.getElementById('root'));

