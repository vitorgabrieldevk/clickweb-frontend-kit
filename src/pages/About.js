import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
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
