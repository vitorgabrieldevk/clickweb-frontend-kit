import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>

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
