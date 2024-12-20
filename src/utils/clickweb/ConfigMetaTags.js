import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ConfigMetaTags = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default ConfigMetaTags;
