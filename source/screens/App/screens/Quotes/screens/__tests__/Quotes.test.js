import React from 'react'
import ReactDOM from 'react-dom'

import Quotes from '../Quotes'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Quotes />, div)
  ReactDOM.unmountComponentAtNode(div)
})
