import { actionsCreator } from '../utilites/index';

const statuses = ['REQUEST', 'SUCCESS', 'FAILED', 'CLEAR'];
const actionTypes = ['ADD_USER', 'REMOVE_USER'];

export default actionsCreator(statuses, actionTypes);