import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import { BehaviorSubject } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import createAuthTokenMiddleware from './middleware/authToken'
import createFetchMiddleware from './middleware/fetch'
import rootReducer from './rootReducer'
import rootEpic from './rootEpic'

const epicMiddleware = createEpicMiddleware()

const configureStore = (initialState = {}) => {
  const middleware = [
    thunk,
    createAuthTokenMiddleware(),
    createFetchMiddleware(),
    epicMiddleware,
  ]

  const enhancers = [applyMiddleware(...middleware)]

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  )

  if (module.hot) {
    module.hot.accept(
      './rootReducer',
      () => store.replaceReducer(require('./rootReducer').default), // eslint-disable-line
    )
  }

  // Epic hot reloading
  const epic$ = new BehaviorSubject(rootEpic)
  // Every time a new epic is given to epic$ it
  // will unsubscribe from the previous one then
  // call and subscribe to the new one because of
  // how switchMap works
  const hotReloadingEpic = (...args) =>
    epic$.pipe(switchMap(epic => epic(...args)))

  epicMiddleware.run(hotReloadingEpic)

  // Epic hot reloading
  if (module.hot) {
    module.hot.accept('./rootEpic', () => {
      const nextRootEpic = require('./rootEpic').default // eslint-disable-line
      epic$.next(nextRootEpic)
    })
  }

  return store
}

export default configureStore
