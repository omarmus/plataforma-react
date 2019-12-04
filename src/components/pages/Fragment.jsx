import React, { useEffect } from 'react';
import Video from '@u-wave/react-vimeo';
import store from '../../redux/store';
import { getCourse, getFragment } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Fragment = ({ fragment, course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1));
    store.dispatch(getFragment(123));
  }, []);

  return (
    <div className='class-page-container background dark-color'>
      {
        fragment && course &&
        <div className='ed-grid lg-grid-12'>
          <div className='lg-cols-8'>
            <Video 
              video={fragment.video}
              width={720}
            />
            <div>
              <h1 className="t3 color accent-color">{fragment.name}</h1>
              <span>{course.name}</span>
            </div>
          </div>
          <div className="lg-cols-4">
            {
              course.data.classes.map(item => (
                <div className='course-class l-section' key={item.class.id}>
                  <h3 className='s-mb-0 color light-color'>{item.class.title}</h3>
                  <p className='color light-color'>{item.class.description}</p>
                  <ul className='data-list'>
                    {
                      item.subjects.map(subject => (
                        <li key={subject.subject.id}>
                          <Link
                            className='color light-color'
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
      }
    </div>
  );
};

const mapStateToProps = state => ({
  fragment: state.fragmentReducer.fragment,
  course: state.courseReducer.course
});

export default connect(mapStateToProps, {})(Fragment);
