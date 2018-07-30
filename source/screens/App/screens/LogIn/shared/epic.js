import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import fetch from 'isomorphic-fetch'

import { REQUEST_AUTH, receiveAuth, failedRequest } from './actions'

import config from 'config'

const fetchUserEpic = action$ =>
  action$.pipe(
    ofType(REQUEST_AUTH),
    mergeMap(async action => {
      const { criteria: { email, password } } = action
      try {
        const response = await fetch(`${config.hasura.uri.auth}v1/login`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.token.jwt}`,
            'X-Hasura-Role': 'user',
          },
          body: JSON.stringify({ data: { email, password } }),
        })

        const json = await response.json()
        const { status, data, response: fetchResponse } = json

        if (status && status === 200) {
          return receiveAuth(data)
        }

        if (fetchResponse && fetchResponse.status) {
          return failedRequest(fetchResponse.error)
        }

        return null
      } catch (error) {
        return failedRequest(error)
      }
    }),
  )

export default fetchUserEpic

// return ajax
//   .post({
//     body: { data: { email, password } },
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${config.token.jwt}`,
//       'X-Hasura-Role': 'user',
//     },
//     responseType: 'json',
//     url: `${config.hasura.uri.auth}v1/login`,
//   })
//   .pipe(
//     map(response => {
//       return receiveAuth(response)
//     }),
// )
