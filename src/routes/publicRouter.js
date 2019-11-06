import React from 'react';
import Registration from '../components/Registration/Registration.js';
import Login from '../components/Login/Login';
import HomePage from '../components/homePage/HomePage'

export default [
  {
    exact: true,
    path: '/login',
    component: Login
  },
  {
    exact: true,
    path: '/registration',
    component: Registration
  },
  {
    exact: true,
    path: '/about',
    component: () => <div>{"About page in process"}<br /><a href='/'>Home page</a></div>
  },
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
]
