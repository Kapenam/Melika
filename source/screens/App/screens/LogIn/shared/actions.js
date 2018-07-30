export const LOGIN = 'APP/LOGIN'
export const LOGOUT = 'APP/LOGOUT'
export const REQUEST_AUTH = 'APP/REQUEST_AUTH'
export const RECEIVE_AUTH = 'APP/RECEIVED_AUTH'
export const FAILED_REQUEST = 'APP/FAILED_REQUEST_AUTH'

export const requestAuth = criteria => ({
  type: REQUEST_AUTH,
  criteria,
})

export const receiveAuth = response => ({
  type: RECEIVE_AUTH,
  response,
})

export const failedRequest = error => ({
  type: FAILED_REQUEST,
  error,
})
