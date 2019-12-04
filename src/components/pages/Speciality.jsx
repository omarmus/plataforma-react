import React, { useEffect } from 'react';
import store from '../../redux/store';
import { getSpeciality } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { Banner } from '../layout/Banner';

const Speciality = ({ speciality }) => {

  useEffect(() => {
    let id = window.location.pathname.replace('/especialidades/', '');
    store.dispatch(getSpeciality(id));
  }, []);

  return (
    <>
      {
        speciality &&
        <>
          <Banner 
            color='dark-color'
            title={speciality.data.name} 
            subtitle={speciality.data.subtitle} 
            info={speciality.data.information} 
            image={{
              src: speciality.data.picture,
              alt: speciality.data.name
            }}
            courseBanner
            poster={speciality.data.picture}
          />
          <main className='ed-grid lg-grid-10'>
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block">
                <div>
                  <h3 className='t4'>¿Qué aprenderás?</h3>
                  <ul>
                    {
                      speciality.data.abilities.map(item => (
                        <li key={item.id}>{item.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className='t4'>Conocimientos previos</h3>
                  <ul>
                    {
                      speciality.data.knowledge.map(item => (
                        <li key={item.id}>{item.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className='t4'>Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
              <h2>Temario de la especialidad</h2>
              <div className='s-border s-pxy-2 log-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                {
                  speciality.data.courses.map(item => (
                    <div className='course-class l-section' key={item.id}>
                      <div className="ed-grid m-grid-3">
                        <img src={item.picture} alt={item.name} />
                        <div className="m-cols-2">
                          <h3 className='s-mb-0'>{item.name}</h3>
                          <p>{item.information}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </main>
        </>
      }
    </>
  );
};

const mapStateToProps = state => ({
  speciality: state.specialityReducer.speciality
});

export default connect(mapStateToProps, {})(Speciality);
