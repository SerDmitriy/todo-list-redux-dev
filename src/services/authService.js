import { actions } from '../actions/rootActions'
import { Api } from '../apiCalls'
import { API_URLS } from '../constants' 

const api = Api.getInstance()

export const login = (payload, callback) => {
  return dispatch => {
    dispatch(actions.AUTH.REQUEST())
    api.post(API_URLS.AUTH, payload)
      .then(res => {
        dispatch(actions.AUTH.SUCCESS(res.data)); // todo res.data => isAuthentificated
        console.log(res.data);
      })
      .catch(err => {
        dispatch(actions.AUTH.FAILED(err))
      })
      .finally(() => {
        callback && typeof callback === 'function' && callback()
      })
  }
}
