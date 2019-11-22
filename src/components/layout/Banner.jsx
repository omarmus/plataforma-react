import React from 'react';

export const Banner = ({ color, image, title, subtitle }) => {
  return (
    <div className={`main-banner img-container l-block ${color}`}>
      <div className='ed-grid'>
        <div className='center'>
          <img
            src={image.src}
            alt={image.alt}
            className='main-banner__img' />
          <div className='main-banner__data'>
            <h1 className='main-banner__title'>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
