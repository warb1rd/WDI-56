import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';                                 //Giving the BrowserRouter a nick-name with 'as'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));                // The router component is being mounted to the dom
registerServiceWorker();
