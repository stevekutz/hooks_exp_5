import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { StateInspector } from 'reinspect';

// import addReactNDevTools from 'reactn-devtools';
// addReactNDevTools();
function AppWrapper() {
    return (
        <StateInspector>
            <App/>
        </StateInspector>
    )
}



ReactDOM.render(

        <AppWrapper />

    
    , document.getElementById('root'));

