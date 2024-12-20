/* -----------------------------------------
| Importação das dependências necessárias
| -----------------------------------------*/
import { Routes, Route } from 'react-router-dom';

import IndexPage from '../pages/Index';
import AboutPage from '../pages/About';

/* -----------------------------------------
| Componente de Rotas
| -----------------------------------------*/
const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/sobre" element={<AboutPage />} />
  </Routes>
);

export default RoutesComponent;
