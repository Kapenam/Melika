import { REQUEST_AUTH, RECEIVE_AUTH, FAILED_REQUEST } from './actions'

const initialState = {
  user: {
    isFetching: false,
    isLoggedIn: false,
    email: null,
  },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH:
    case RECEIVE_AUTH:
    case FAILED_REQUEST:
    default:
      return state
  }
}
