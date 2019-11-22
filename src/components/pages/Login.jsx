import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const authentication = e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    usuario: form.email.value,
    contrasena: form.password.value
  };
  axios.post(`${process.env.REACT_APP_API_URL_AUTH}`, data)
    .then(response => {
      window.localStorage.setItem('token', response.data.token);
      window.location = '/';
    })
    .catch(e => {
      console.error(e);
      window.alert(e.response.data.error);
    });
};

const Login = () => {
  return (
    <div className='ed-grid'>
      <div className='m-to-center m-60 lg-30'>
        <div className='l-block' />
        <h1 className='center'>Iniciar sesión</h1>
        <form onSubmit={authentication.bind()}>
          <div className='form__item'>
            <label htmlFor='email'>
              Correo electrónico
              <input
                type='text'
                name='email'
                id='email'
                placeholder='usuario@mail.com'
                required />
            </label>
          </div>
          <div className='form__item'>
            <label htmlFor='password'>
              Contraseña
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Ingrese su contraseña'
                required />
            </label>
          </div>
          <div className='form__item'>
            <button
              type='submit'
              className='button full'>Iniciar sesión</button>
          </div>
        </form>
        <div className='center'>
          ¿No tienes una cuenta? <NavLink to='/registro'>Registrar usuario</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
