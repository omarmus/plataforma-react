import React, { useEffect } from 'react';
import { Banner } from '../layout/Banner';
import store from '../../redux/store';
import { getAllTeachers } from '../../redux/actionCreators';

const Teachers = ({ match }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match]);

  return (
    <Banner
      color='third-color'
      image={{
        src: 'https://thimpress.com/wp-content/uploads/2018/02/tech-banner.jpg',
        alt: 'Banner profesores'
      }}
      title='Nuestros profesores'
      subtitle='Este docente está altamente calificado' />
  );
};

export default Teachers;
