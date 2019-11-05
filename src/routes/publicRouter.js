import React from 'react';
import Registration from '../components/Registration/Registration.js';
import Login from '../components/Login/Login';

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
    component: () => <div>{"Map of our page: /about --- /registration --- /login"}</div>
  },
  {
    exact: true,
    path: '/',
    component: () => <div>{"Map of our page: /about --- /registration --- /login"}</div>
  },
]
