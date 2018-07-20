import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import SideMenuBar from '../SideMenuBar'

describe('App/screens/SideMenuBar/screens/SideMenuBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SideMenuBar />, div)
    ReactDOM.unmountComponentAtNode(div)
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
