import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from "./Header";
import Container from "./Container";

const App = () => (
  <Router>
    <div>
      <Header />
      <Container />
    </div>
  </Router>
 );
 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
