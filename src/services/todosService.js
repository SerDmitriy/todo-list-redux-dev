import { actions } from '../actions/rootActions'
import { Api } from '../apiCalls'
import { API_URLS } from '../constants' 

const api = Api.getInstance()

export const addNewTodo = (payload, callback) => {
  return dispatch => {
    dispatch(actions.ADD_TODO.REQUEST())
    api.post(API_URLS.TODO, payload)
      .then(res => {
        dispatch(actions.ADD_TODO.SUCCESS(res.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(actions.ADD_TODO.FAILED(err))
      })
      .finally(() => {
        callback && typeof callback === 'function' && callback()
      })
  }
}

export const fetchTodos = (payload, callback) => {
  return dispatch => {
    dispatch(actions.FETCH_TODOS.REQUEST())
    api.get(API_URLS.TODOS)
      .then(res => {
        dispatch(actions.FETCH_TODOS.SUCCESS(res.data))
      })
      .catch(err => {
        dispatch(actions.FETCH_TODOS.FAILED(err))
      })
      .finally(() => {
        callback && typeof callback === 'function' && callback()
      })
  }
}

export const removeTodo = (payload, callback) => {
  return dispatch => {
    dispatch(actions.REMOVE_TODO.REQUEST())
    api.delete(`${API_URLS.TODO}/${payload._id}`)
      .then(res => {
        console.log('res of deleting = ', res.data)
        dispatch(actions.REMOVE_TODO.SUCCESS(res.data))
      })
      .catch(err => {
        console.log('error of deleting = ', payload._id)
        dispatch(actions.REMOVE_TODO.FAILED(err))
      })
      .finally(() => {
        callback && typeof callback === 'function' && callback()
      })
  }
}

export const editTodo = (payload, callback) => {
  return dispatch => {
    dispatch(actions.EDIT_TODO.REQUEST())
    api.put(`${API_URLS.TODO}/${payload._id}`, payload)
      .then(res => {
        dispatch(actions.EDIT_TODO.SUCCESS(res.data))
      })
      .catch(err => {
        dispatch(actions.EDIT_TODO.FAILED(err))
      })
      .finally(() => {
        callback && typeof callback === 'function' && callback()
      })
  }
}