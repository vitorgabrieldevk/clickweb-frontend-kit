/* -----------------------------------------
| Importações - React
| -----------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* -----------------------------------------
| Importações - Style
| -----------------------------------------*/
import 'semantic-ui-css/semantic.min.css';

/* -----------------------------------------
| Importações - Interno
| -----------------------------------------*/
import './assets/scss/App.scss';

/* -----------------------------------------
| Renderização da aplicação
| -----------------------------------------*/
const root = ReactDOM.createRoot(document.getElementById('root'));

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