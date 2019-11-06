import React from 'react';
import TodosContainer from '../components/TodosContainer/TodosContainer';


export default [
  {
    exact: true,
    path: '/user',
    component: () => <div>{'One user information'}<br /><a href='/'>Home page</a></div>
  },
  {
    exact: true,
    path: '/todo',
    component: TodosContainer
  },
  {
    exact: true,
    path: '/todos',
    component: () => <div>{"/todos page"}<br /><a href='/'>Home page</a></div>
  },  
  {
    exact: true,
    path: '/user/statistic',
    component: () => <div>{"/user/statistic"}<br /><a href='/'>Home page</a></div>
  },
]