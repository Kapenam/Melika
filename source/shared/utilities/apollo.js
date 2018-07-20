import { ApolloLink } from 'apollo-client-preset'
import { setContext } from 'apollo-link-context'
import { HASURA } from '../const'

const MiddlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(HASURA.JWT_AUTH_TOKEN)
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader,
    },
  })
  return forward(operation)
})

const AuthLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${HASURA.JWT_AUTH_TOKEN}`,
      'Access-Control-Allow-Origin': '*',
      'X-Hasura-Role': 'admin',
      'Content-Type': 'application/json',
    },
  }
})

// const afterwareLink = new ApolloLink((operation, forward) =>
//   forward(operation).map(response => {
//     const context = operation.getContext();
//     const { response: { headers } } = context;

//     if (headers) {
//       const token = headers.get(JWT.HEADER.TOKEN.NAME);
//       const refreshToken = headers.get(JWT.HEADER.REFRESH_TOKEN.NAME);

//       if (token) {
//         localStorage.setItem(JWT.LOCAL_STORAGE.TOKEN.NAME, token);
//       }

//       if (refreshToken) {
//         localStorage.setItem(
//           JWT.LOCAL_STORAGE.REFRESH_TOKEN.NAME,
//           refreshToken,
//         );
//       }
//     }

//     return response;
//   }),
// );

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors && graphQLErrors.filter(e => e).length > 0)
//     graphQLErrors.map(({ message = '', status = 200 }) => {
//       if (UNAUTHORIZED === message || status === 401) {
//         console.warn(`You've attempted to access ${UNAUTHORIZED} section`);
//         if (
//           history &&
//           history.location &&
//           history.location.pathname !== '/login'
//         ) {
//           history.push('/login');
//         }
//       }
//       if (FORBIDDEN === message || status === 403) {
//         console.warn(`You've attempted a ${FORBIDDEN} action`);
//         history.push(`/error-page/403`);
//       }
//       return null;
//     });
//   if (networkError && networkError.statusCode === 401) {
//     // eslint-disable-next-line
//     history.push('/login');
//     console.warn(UNAUTHORIZED);
//   }
//   if (networkError && networkError.statusCode === 403) {
//     // Do something
//     console.warn(FORBIDDEN);
//   }
//   if (networkError && networkError.statusCode >= 500) {
//     // eslint-disable-next-line
//     console.warn('SERVER ERROR');
//     history.push(`/error-page/${networkError.statusCode}`);
//   }
// });

// const authMiddlewareLink = setContext(() => {
//   const headers = {
//     headers: {
//       [JWT.HEADER.TOKEN.NAME]:
//         localStorage.getItem(JWT.LOCAL_STORAGE.TOKEN.NAME) || null,
//       [JWT.HEADER.REFRESH_TOKEN.NAME]: localStorage.getItem(JWT.LOCAL_STORAGE.REFRESH_TOKEN.NAME) || null, // eslint-disable-line
//     },
//   };

//   if (headers.headers[JWT.HEADER.REFRESH_TOKEN.NAME]) {
//     const currentTime = Date.now().valueOf() / 1000;
//     const tokenExpiration = decode(
//       headers.headers[JWT.HEADER.REFRESH_TOKEN.NAME],
//     ).exp;
//     if (currentTime > tokenExpiration) {
//       history.push('/login');
//     }
//   }
//   return headers;
// });

export default {
  AuthLink,
  MiddlewareAuthLink,
}
