const initialState = {
  errors: null,
  loading: false,
  success: false,
  currentUser: {},
  users: [{}]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        success: true,
        errors: null
      }
    case 'ADD_USER_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'ADD_USER_CLEAR':
      return {
        ...state,
        currentUser: {},
        loading: false,
        success: false,
        errors: null
      }
    case 'REMOVE_USER_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'REMOVE_USER_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        users: [...state.users].filter(item => item.id !== action.payload.id),
        loading: false,
        success: true,
        errors: null
      }
    case 'REMOVE_USER_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'REMOVE_USER_CLEAR':
      return {
        ...initialState
      }
    default:
      return state
  }
}