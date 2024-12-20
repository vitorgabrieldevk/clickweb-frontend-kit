/* -----------------------------------------
| Importações - React
| -----------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery';

/* -----------------------------------------
| Importações - Interno
| -----------------------------------------*/
import './assets/scss/App.scss';

/* -----------------------------------------
| Renderização da aplicação
| -----------------------------------------*/
const root = ReactDOM.createRoot(document.getElementById('root'));
window.$ = $;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* -----------------------------------------
| Função de performance
| -----------------------------------------*/
reportWebVitals();