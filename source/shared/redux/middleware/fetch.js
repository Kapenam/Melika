const createFetchMiddleware = (
  fetch = window.fetch,
) => store => next => async action => {
  if (!action || !action.fetchConfig) {
    next(action)
  }

  const { dispatch } = store
  const { fetchConfig } = action

  dispatch(fetchConfig.init)

  const {
    path = '/',
    method = 'GET',
    headers,
    body,
    success: successHandler,
    failure: failureHandler,
  } = fetchConfig

  try {
    const response = await fetch(path, {
      method,
      headers,
      body: JSON.stringify(body),
    })
    const json = await response.json()
    dispatch(successHandler(json))
  } catch (e) {
    dispatch(failureHandler(e))
  }
}

export default createFetchMiddleware
