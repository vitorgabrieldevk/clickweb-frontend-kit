import React from 'react';
import { Link } from 'react-router-dom';
import ConfigMetaTags from '../utils/clickweb/ConfigMetaTags';

const About = () => {
  return (
    <>
      <ConfigMetaTags 
        title="Seja bem-vindo à página de sobre" 
        description="Conheça como nossa empresa surgiu!" 
      />

      <div className="main-page-index">
        <h1>Venha conhecer a história da nossa empresa</h1>
        <Link to="/">
          <button className="ui primary button">Voltar para a home</button>
        </Link>
      </div>
    </>
  );
};

export default About;
