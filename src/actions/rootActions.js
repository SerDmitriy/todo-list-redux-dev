import toDoActions from './toDoActions';
import authActions from './authActions';
import usersActions from './usersActions';

export const actions = {
  ...toDoActions,
  ...authActions,
  ...usersActions
}


