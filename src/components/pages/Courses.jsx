import React, { useEffect } from 'react';
import { Banner } from '../layout/Banner';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllCourses } from '../../redux/actionCreators';
import Card from './Card';

const Courses = ({ match, courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses());
    console.log('load');
  }, [match]);

  return (
    <>
      <Banner
        color='dark-color'
        image={{
          src: 'https://thimpress.com/wp-content/uploads/2018/02/tech-banner.jpg',
          alt: 'Banner especialidades'
        }}
        title='Nuestros cursos'
        subtitle='Estos son nuestros cursos' />
        {
          courses &&
          <main className='ed-grid m-grid-5'>
            {
              courses.map(item => (
                <Card 
                  key={item.id}
                  uuid={item.id}
                  picture={item.picture}
                  name={item.name}
                  path='curso'
                />
              ))
            }
          </main>
        }
    </>
  );
};

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
});
 
export default connect(mapStateToProps, {})(Courses);

