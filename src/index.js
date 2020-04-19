import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/main';
import Individual from './individualComponent/index';

const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/individual" component={Individual}/>
      </Switch>
  </Router>
);


ReactDOM.render(
  routing,
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
