import React from 'react'
import { shallow } from 'enzyme'

import LogIn from '../LogIn'

it('renders without crashing', () => {
  const wrapper = shallow(<LogIn />)

  expect(wrapper.find('div.container')).toHaveLength(1)
})
