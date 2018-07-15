import axios from 'axios';
import { USER_AUTH_TOKEN, HASURA } from '../const';

export const login = async ({ email, password, role = 'user' }) => {
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

    console.log('Payload Response: ', payload) /* eslint-disable-line */
    const { data } = payload;
    localStorage.setItem(USER_AUTH_TOKEN, data['auth_token']);
    return data;
  } catch (error) {
    console.error(error) /* eslint-disable-line */
    return error;
  }
};

export const isLoggedIn = () => !!localStorage.getItem(USER_AUTH_TOKEN);

export default {
  login,
  isLoggedIn,
};
