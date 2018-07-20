import axios from 'axios';
import { HASURA } from '../const';

const login = async ({ email, password, role = 'user' }) => {
  try {
    const payload = await axios.post(
      `${HASURA.AUTH.API_URI}v1/login`,
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
          Authorization: `Bearer ${HASURA.JWT_AUTH_TOKEN}`,
          'X-Hasura-Role': role,
        },
      },
    );

    console.log('Payload Response: ', payload);
    //TODO: check the response status here b/c if it's not 500/ 400s will not get to the catch block
    const { response, status, data } = payload;
    // localStorage.setItem(USER_AUTH_TOKEN, data['auth_token']);

    if (status && status === 200) {
      return data;
    }

    // if (response && response.status) {
    //   return null;
    // }

    return null;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const logout = async userAuthToken => {
  try {
    if (!userAuthToken) {
      return '';
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userAuthToken}`,
      },
    };

    const payload = await axios.post(
      `${HASURA.AUTH.API_URI}v1/user/logout`,
      {},
      options,
    );

    return payload;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default {
  login,
  logout,
};
