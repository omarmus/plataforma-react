import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Protected from './routes/Protected';
import Specialities from './pages/Specialities';
import Speciality from './pages/Speciality';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import Teachers from './pages/Teachers';
import Fragment from './pages/Fragment';
import Public from './routes/Public';
import Terminos from './pages/Terminos';
import Header from './layout/Header';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Protected path='/' exact component={Home} />
      <Protected path='/especialidades' exact component={Specialities} />
      <Protected path='/especialidades/:id' exact component={Speciality} />
      <Protected path='/cursos' exact component={Courses} />
      <Protected path='/curso/:id' exact component={Course} />
      <Protected path='/clase/:id' exact component={Fragment} />
      <Protected path='/profesores' exact component={Teachers} />
      <Protected path='/terminos' exact component={Terminos} />

      <Public path='/login' exact component={Login} />
      <Public path='/registro' exact component={Register} />

      <Route exact component={Page404} />
    </Switch>
  </Router>
);

export default App;
