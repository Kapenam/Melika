import axios from 'axios'

import config from 'config'

/* eslint-disable */
const login = async ({ email, password, role = 'user' }) => {
  try {
    const payload = await axios.post(
      `${config.hasura.uri.auth}v1/login`,
      {
        provider: 'email',
        data: {
          email,
          password,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.token.jwt}`,
          'X-Hasura-Role': role,
        },
      },
    )

    console.log('Payload Response: ', payload)
    // TODO: check the response status here b/c if it's not 500/ 400s will not get to the catch block
    const { response, status, data } = payload
    // localStorage.setItem(USER_AUTH_TOKEN, data['auth_token']);

    if (status && status === 200) {
      return data
    }

    // if (response && response.status) {
    //   return null;
    // }

    return null
  } catch (error) {
    console.error(error)
    return error
  }
}

const logout = async userAuthToken => {
  try {
    if (!userAuthToken) {
      return ''
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userAuthToken}`,
      },
    }

    const payload = await axios.post(
      `${config.hasura.uri.auth}v1/user/logout`,
      {},
      options,
    )

    return payload
  } catch (e) {
    console.error(e)
    return e
  }
}

/* eslint-disable */

export default {
  login,
  logout,
}
