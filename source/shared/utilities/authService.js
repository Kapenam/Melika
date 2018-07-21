import { USER_AUTH_COOKIE_NAME } from '../const'
import Auth from '../api/auth'

import ClientStorage from './clientStorage'
import history from './history'

const handleLogin = async (email, password) => {
  const result = await Auth.login({ email, password })
  console.log('User Email Returned: ', result.email) // eslint-disable-line

  if (result && result.auth_token) {
    ClientStorage.save(USER_AUTH_COOKIE_NAME, result.auth_token)
    history.push('/')
  } else {
    console.log('Error logging in to Has.Ur.A') // eslint-disable-line
  }
}

const handleLogout = async () => {
  const userToken = ClientStorage.load(USER_AUTH_COOKIE_NAME)
  await Auth.logout(userToken)
  ClientStorage.remove(USER_AUTH_COOKIE_NAME)
  // TODO: so when you log out where do you go?
  history.push('/')
}

const isLoggedIn = () => !!ClientStorage.load(USER_AUTH_COOKIE_NAME)

export default {
  handleLogin,
  handleLogout,
  isLoggedIn,
}
