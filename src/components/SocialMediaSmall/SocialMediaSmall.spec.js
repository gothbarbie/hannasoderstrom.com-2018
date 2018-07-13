import React from 'react'
import { shallow } from 'enzyme'

import SocialMediaSmall from './index'

describe('components/SocialMediaSmall', () => {
  let component

  beforeEach(() => {
    component = shallow(<SocialMediaSmall />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
