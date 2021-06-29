import React from 'react';
import  ReactDOM  from 'react-dom';
import './global.css';
import reportWebVitals from './reportWebVitals'; //para poder seguir trabajando sin conexion
import 'bootstrap/dist/css/bootstrap.css'


import Home from './pages/Home';

const container = document.getElementById('root');

ReactDOM.render(<Home />, container)
reportWebVitals();