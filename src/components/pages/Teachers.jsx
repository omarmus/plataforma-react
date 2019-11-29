import React, { useEffect } from 'react';
import { Banner } from '../layout/Banner';
import store from '../../redux/store';
import { getAllTeachers } from '../../redux/actionCreators';
import { connect } from 'react-redux';

const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match]);

  return (
    <>
      <Banner
        color='third-color'
        image={{
          src: 'https://thimpress.com/wp-content/uploads/2018/02/tech-banner.jpg',
          alt: 'Banner profesores'
        }}
        title='Nuestros profesores'
        subtitle='Este docente está altamente calificado' />
      {
        teachers && 
        <main>
          <div className='ed-grid m-grid-3 lg-grid-4 row-gap'>
            { teachers.map(item => (
              <article key={item.id}>
                <div className="s-px-4">
                  <div className="img-container circle s-mb-2">
                    <img src={item.picture} alt={item.name} />
                  </div>
                </div>
                <div className="s-center">
                  <p className="t3 s-mb-1">{item.nombre}</p>
                  <p>{item.country || 'País'}</p>
                </div>
              </article>
            )) }
          </div>
        </main>
      }
    </>
  );
};

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers);
