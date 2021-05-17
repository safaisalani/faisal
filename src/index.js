// importing react , react-dom , app

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM(which to render , where to render )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// root is the id of the div tag inside the index.html 