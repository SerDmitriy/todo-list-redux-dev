const initialState = {
  todos: [],
  errors: null,
  loading: false,
  success: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos].concat([action.payload]),
        loading: false,
        success: true,
        errors: null
      }
    case 'ADD_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'ADD_TODO_CLEAR':
      return {
        ...initialState
      }
    case 'EDIT_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'EDIT_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos].map(item => item._id === action.payload._id ? action.payload : item),
        loading: false,
        success: true,
        errors: null
      }
    case 'EDIT_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'EDIT_TODO_CLEAR':
      return {
        ...initialState
      }
    case 'REMOVE_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'REMOVE_TODO_SUCCESS':
      console.log('reducers remove todo, payload:  ', action.payload)
      return {
        ...state,
        todos: [...state.todos].filter(item => item._id !== action.payload._id),
        loading: false,
        success: true,
        errors: null
      }
    case 'REMOVE_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'REMOVE_TODO_CLEAR':
      return {
        ...initialState
      }
    case 'FETCH_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos].filter(
          item => item._id === action.payload._id),
        loading: false,
        success: true,
        errors: null
      }
    case 'FETCH_TODO_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'FETCH_TODO_CLEAR':
      return {
        ...initialState
      }
    case 'FETCH_TODOS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        loading: false,
        success: true,
        errors: null
      }
    case 'FETCH_TODOS_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'FETCH_TODOS_CLEAR':
      return {
        ...initialState
      }

    case 'CLEAR_COMPLETED_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'CLEAR_COMPLETED_SUCCESS':
      return {
        ...state,
        todos: state.todos.filter(item => !item.checked)
      }
    case 'CLEAR_COMPLETED_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }

    default:
      return state
  }
}