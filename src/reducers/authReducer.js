const initialState = {
  errors: null,
  loading: false,
  success: false,
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        success: true,
        errors: null
      }
    case 'AUTH_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload
      }
    case 'AUTH_CLEAR':
      return {
        ...initialState,
      }

    default:
      return state
  }
}