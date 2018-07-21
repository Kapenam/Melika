import React from 'react'
import ReactDOM from 'react-dom'

import Leads from '../Leads'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Leads />, div)
  ReactDOM.unmountComponentAtNode(div)
})
