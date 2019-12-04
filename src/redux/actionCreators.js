import axios from 'axios';
import {
  GET_ALL_POSTS,
  GET_ALL_SPECIALITIES,
  GET_ALL_COURSES,
  GET_ALL_TEACHERS,
  GET_ALL_FRAGMENTS,
  GET_POST,
  GET_SPECIALITY,
  GET_COURSE,
  GET_TEACHER,
  GET_FRAGMENT
} from './actions';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllPosts = () => dispatch => {
  axios.get(`${API_URL}/posts`)
    .then(response => {
      return dispatch({
        type: GET_ALL_POSTS,
        posts: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getAllSpecialities = () => dispatch => {
  axios.get(`${API_URL}/especialidades`)
    .then(response => {
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getAllCourses = () => dispatch => {
  axios.get(`${API_URL}/cursos`)
    .then(response => {
      return dispatch({
        type: GET_ALL_COURSES,
        courses: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getAllTeachers = () => dispatch => {
  axios.get(`${API_URL}/profesores`)
    .then(response => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getAllClasses = () => dispatch => {
  axios.get(`${API_URL}/clases`)
    .then(response => {
      return dispatch({
        type: GET_ALL_FRAGMENTS,
        clases: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

// GET
export const getPost = id => dispatch => {
  axios.get(`${API_URL}/posts/${id}`)
    .then(response => {
      return dispatch({
        type: GET_POST,
        post: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getSpeciality = id => dispatch => {
  axios.get(`${API_URL}/especialidad/${id}`)
    .then(response => {
      return dispatch({
        type: GET_SPECIALITY,
        speciality: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getCourse = id => dispatch => {
  axios.get(`${API_URL}/curso/${id}`)
    .then(response => {
      return dispatch({
        type: GET_COURSE,
        course: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getTeacher = id => dispatch => {
  axios.get(`${API_URL}/profesores/${id}`)
    .then(response => {
      return dispatch({
        type: GET_TEACHER,
        teacher: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};

export const getFragment = id => dispatch => {
  axios.get(`${API_URL}/clases/${id}`)
    .then(response => {
      return dispatch({
        type: GET_FRAGMENT,
        fragment: response.data
      });
    }).catch(e => {
      console.log('No se pudo obtener la respuesta');
    });
};
