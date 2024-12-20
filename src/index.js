/* -----------------------------------------
| Importações - React
| -----------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import './utils/_helpers';
import $ from 'jquery';
import { HelmetProvider } from 'react-helmet-async';

/* -----------------------------------------
| Importações - Interno
| -----------------------------------------*/
import './assets/scss/App.scss';

/* -----------------------------------------
| Renderização da aplicação
| -----------------------------------------*/
const root = ReactDOM.createRoot(document.getElementById('application-clickweb'));
window.$ = $;

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

/* -----------------------------------------
| Função de performance
| -----------------------------------------*/
reportWebVitals();