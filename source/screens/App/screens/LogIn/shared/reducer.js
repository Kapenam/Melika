import { REQUEST_AUTH, RECEIVE_AUTH, FAILED_REQUEST } from './actions'

const initialState = {
  user: {
    isFetching: false,
    isAuthenticated: false,
    criteria: null,
    email: null,
  },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        criteria: action.criteria,
        email: null,
      })
    case RECEIVE_AUTH:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: null,
        criteria: null,
        email: action.data.email,
      })
    case FAILED_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.error,
        email: null,
        criteria: null,
      })
    default:
      return state
  }
}
