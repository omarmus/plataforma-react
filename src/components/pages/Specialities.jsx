import React, { useEffect } from 'react';
import { Banner } from '../layout/Banner';
import store from '../../redux/store';
import { getAllSpecialities } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import Card from './Card';

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities());
  }, []);

  return (
    <>
      <Banner
        color='first-color'
        image={{
          src: 'https://thimpress.com/wp-content/uploads/2018/02/tech-banner.jpg',
          alt: 'Banner especialidades'
        }}
        title='Nuestras especialidades'
        subtitle='Esta son nuestras especialidades' />
      {
        specialities && 
        <main className='ed-grid m-grid-3'>
          {
            specialities.map(item => (
              <Card 
                key={item.id}
                uuid={item.id}
                picture={item.picture}
                name={item.name}
                path='especialidades'
              />
            ))
          }
        </main>
      }
    </>
  );
};

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
});

export default connect(mapStateToProps, {})(Specialities);
