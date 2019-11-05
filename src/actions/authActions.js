import { actionsCreator } from '../utilites/index';

const statuses = ['REQUEST', 'SUCCESS', 'FAILED', 'CLEAR'];
const actionTypes = ['AUTH'];

export default actionsCreator(statuses, actionTypes);
