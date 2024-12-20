import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Seja bem-vindo à página inicial</title>
        <meta name="description" content="Informações sobre nossa empresa e produtos." />
      </Helmet>

      <div className="main-page-index">
        <h1>Bem-vindo à página inicial!</h1>
        <Link to="/sobre">
          <button className="ui primary button">Ir para Sobre</button>
        </Link>
      </div>
    </>
  );
};

export default Index;
