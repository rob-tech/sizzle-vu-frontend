import React from 'react';
import ReactDOM from 'react-dom';
import './StyleSheets/index.css';
import './StyleSheets/accountPage.css';
import './StyleSheets/MovieDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from'./Components/Main';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
