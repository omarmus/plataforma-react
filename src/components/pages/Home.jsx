import React, { useEffect } from 'react';
import { Banner } from '../layout/Banner';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllPosts } from '../../redux/actionCreators';
import Publication from './Publication';

const Home = ({ match, posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts());
  }, [match]);

  return (
    <>
      <Banner 
        color='dark-color'
        image={{
          src: 'https://thimpress.com/wp-content/uploads/2018/02/tech-banner.jpg',
          alt: 'Banner home'
        }}
        title='Bienvenido a la experiencia más increible en educación online'
        subtitle='Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás busando contenido que encontrarás acá.'
        home={true}
        poster='https://res.cloudinary.com/edteam/image/upload/w_400/v1573259688/courses/bi-poster.png'
      />
      <main className='ed-grid m-grid-2'>
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
            <div>
              {
                posts.map(item => 
                <Publication 
                  key={item.id} 
                  title={item.title}
                  author={item.author}
                  fecha={item.fecha}
                  content={item.content}
                />)
              }
            </div>
            :
            <p>No existen publicaciones</p>
          }
        </div>
        <div>
          <h3>Lista de Categorías</h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>Angular</span></li>
            <li><span>VueJS</span></li>
            <li><span>React Native</span></li>
          </ul>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

export default connect(mapStateToProps, {})(Home);
