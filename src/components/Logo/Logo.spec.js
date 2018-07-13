import React from 'react'
import { shallow } from 'enzyme'

import Logo from './index'

describe('components/Logo', () => {
  let component

  beforeEach(() => {
    component = shallow(<Logo />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
