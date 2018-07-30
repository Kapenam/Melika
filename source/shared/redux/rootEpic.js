import { combineEpics } from 'redux-observable'

import fetchUserEpic from 'screens/App/screens/LogIn/shared/epic'

export default combineEpics(fetchUserEpic)
