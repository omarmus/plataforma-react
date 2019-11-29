import React from 'react';
import { Banner } from '../layout/Banner';

const Specialities = () => {
  return (
    <Banner
      color='first-color'
      image={{
        src: 'https://thimpress.com/wp-content/uploads/2018/02/tech-banner.jpg',
        alt: 'Banner especialidades'
      }}
      title='Nuestros especialidades'
      subtitle='Esta son nuestras especialidades' />
  );
};

export default Specialities;
