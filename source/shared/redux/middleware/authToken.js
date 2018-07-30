import clientStorage from '../../utilities/clientStorage'

import config from 'config'

const createAuthTokenMiddleware = () => store => next => action => {
  const { token: previousToken } = store.getState()
  next(action)
  const { token: nextToken } = store.getState()

  if (nextToken && nextToken !== previousToken) {
    clientStorage.save(config.auth.userCookie, nextToken)
  }
}

export default createAuthTokenMiddleware
