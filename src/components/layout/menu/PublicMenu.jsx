import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink exact to='/'>Login</NavLink></li>
      <li><NavLink to='/registrar'>Registrar</NavLink></li>
    </ul>
  );
};

export default PublicMenu;
