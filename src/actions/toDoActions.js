import { actionsCreator } from '../utilites/index';

const statuses = ['REQUEST', 'SUCCESS', 'FAILED', 'CLEAR'];
const actionTypes = [
  'ADD_TODO',
  'REMOVE_TODO',
  'FETCH_TODO',
  'FETCH_TODOS',
  'EDIT_TODO',
  'CLEAR_COMPLETED'];

  export default actionsCreator(statuses, actionTypes);

