import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { ApolloProvider } from 'react-apollo'
// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

import registerServiceWorker from './registerServiceWorker'

import configureStore from 'shared/redux/configureStore'
import initialState from 'shared/redux/initialState'
import AppScreen from 'screens/App/screens/AppScreen'
// import Apollo from 'shared/utilities/apollo'

import './index.css'

// const httpLink = new HttpLink({
//   uri: 'https://data.blabbermouth96.hasura-app.io/v1',
//   // credentials: 'include',
//   fetchOptions: {
//     mode: 'no-cors',
//   },
// })

// const client = new ApolloClient({
//   link: Apollo.AuthLink.concat(httpLink),
//   cache: new InMemoryCache(),
// })

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <AppScreen />
  </Provider>,
  document.getElementById('melikaApp'),
)

registerServiceWorker()
