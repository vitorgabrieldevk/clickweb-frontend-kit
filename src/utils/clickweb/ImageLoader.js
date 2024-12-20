import React from 'react';

const ImageLoader = ({ module, path, alt, ...props }) => {
    const imagePath = `/assets/images/${module}/${path}`;
    return <img src={imagePath} alt={alt} {...props} />;
};

export default ImageLoader;
