import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'

import SideMenuBar from '../SideMenuBar'

describe('App/screens/SideMenuBar/screens/SideMenuBar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SideMenuBar Router={BrowserRouter} />)
    expect(wrapper.find('ul.sideBarContainer')).toHaveLength(1)
  })

  // it('renders a list of menu items', () => {
  //   const props = [
  //     {
  //       name: 'first menu item',
  //       link: '/the_correct_link'
  //     },
  //     {
  //       name: 'second menu item',
  //       link: '/another_correct_link'
  //     },
  //   ]
  //   wrapper = shallow(<SideMenuBar menuItems={props} />)
  //   console.log(wrapper)
  // })
})
