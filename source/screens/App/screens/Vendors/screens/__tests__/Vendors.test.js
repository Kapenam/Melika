import React from 'react'
import ReactDOM from 'react-dom'

import Vendors from '../Vendors'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Vendors />, div)
  ReactDOM.unmountComponentAtNode(div)
})
