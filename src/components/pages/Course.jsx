import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getCourse } from '../../redux/actionCreators';
import { Banner } from '../layout/Banner';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

  useEffect(() => {
    let id = window.location.pathname.replace('/curso/', '');
    store.dispatch(getCourse(id));
  }, []);

  return (
    <>
      {
        course &&
        <>
          <Banner
            color='dark-color'
            title={course.name} 
            subtitle={course.subtitle} 
            info={course.information} 
            image={{
              src: course.picture,
              alt: course.name
            }}
            courseBanner
            poster={course.picture}
            especialidad={course.data.specialities[0].name}
          />
          <main className='ed-grid lg-grid-10'>
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block">
                <div>
                  <h3 className='t4'>¿Qué aprenderás?</h3>
                  <ul dangerouslySetInnerHTML={{__html: course.you_learn}} />
                </div>
                <div>
                  <h3 className='t4'>Conocimientos previos</h3>
                  <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
                </div>
                <div>
                  <h3 className='t4'>Nivel</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className='s-border s-pxy-2 log-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                {
                  course.data.classes.map(item => (
                    <div className='course-class l-section' key={item.class.id}>
                      <h3 className='s-mb-0'>{item.class.title}</h3>
                      <p>{item.class.description}</p>
                      <ul className='data-list'>
                        {
                          item.subjects.map(subject => (
                            <li>
                              <Link
                                className='color dark-color'
                                to={`/clase/${subject.subject.id}`}>{subject.subject.title}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="lg-cols-3">
              <h2 className="t3">Profesor</h2>
              <p>Omar Gutiérrez</p>
            </div>
          </main>
        </>
      }
    </>
  );
};

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course);
