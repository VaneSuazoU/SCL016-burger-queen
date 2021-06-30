import React from 'react';
import  ReactDOM  from 'react-dom';
import './global.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

import App from './router/App';

const view = document.getElementById('root');

ReactDOM.render(<App />, view) //(<Lo que quiero mostrar /> , Donde lo muestro)
reportWebVitals();