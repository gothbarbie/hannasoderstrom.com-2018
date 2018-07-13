import React from 'react'
import { shallow } from 'enzyme'

import MainNavigation from './index'

describe('components/MainNavigation', () => {
  let component

  beforeEach(() => {
    component = shallow(<MainNavigation />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
