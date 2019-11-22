import React from 'react';
import { NavLink } from 'react-router-dom';

const registration = () => {};

const Register = () => {
  return (
    <div className='ed-grid'>
      <div className='m-to-center m-60 lg-30'>
        <div className='l-block' />
        <h1 className='center'>Registrar usuario</h1>
        <form onSubmit={registration.bind()}>
          <div className='form__item'>
            <label htmlFor='email'>
              Nombre completo
              <input
                type='text'
                name='fullname'
                id='fullname'
                placeholder='Ingrese su nombre completo'
                required />
            </label>
          </div>
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
              className='button full'>Crear usuario</button>
          </div>
          <NavLink to='/login'>Iniciar sesión</NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
