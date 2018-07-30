// import dotenv from 'dotenv'

// if (!process.env.HASURA_TOKEN_JWT && process.env.NODE_ENV === 'development') {
//   dotenv.config()
// }

const environment = {
  auth: {
    userCookie: process.env.AUTH_USER_COOKIE,
  },
  hasura: {
    token: {
      jwt: process.env.HASURA_TOKEN_JWT,
    },
    uri: {
      auth: process.env.HASURA_API_AUTH_URI,
      data: process.env.HASURA_API_DATA_URI,
      dataGraphQl: process.env.HASURA_API_DATA_GRAPHQL_URI,
    },
  },
}

export default environment
