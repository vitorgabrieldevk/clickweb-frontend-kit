import React from 'react';
import { Link } from 'react-router-dom';
import ConfigMetaTags from '../utils/clickweb/ConfigMetaTags';
import ImageLoader from '../utils/clickweb/ImageLoader';

const Index = () => {
  return (
    <>
      <ConfigMetaTags 
        title="Seja bem-vindo à página inicial" 
        description="Conheça como nossa empresa surgiu!" 
      />

      <div className="main-page-index">
        <h1>Bem-vindo à página inicial!</h1>

        <ImageLoader module="banners" path="teste.jpg" alt="Promoção de Natal" />
        
        <Link to="/sobre">
          <button className="ui primary button">Ir para Sobre</button>
        </Link>
      </div>
    </>
  );
};

export default Index;
