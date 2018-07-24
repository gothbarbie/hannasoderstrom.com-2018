import React from 'react'
import { shallow } from 'enzyme'

import SocialMedia from '../index'

describe('components/SocialMedia', () => {
  let component

  beforeEach(() => {
    component = shallow(<SocialMedia />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
