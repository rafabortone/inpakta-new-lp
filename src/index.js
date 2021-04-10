import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './subtemplates/Header';
import Footer from './subtemplates/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
