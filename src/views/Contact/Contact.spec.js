import React from 'react'
import { shallow } from 'enzyme'

import Contact from './index'

describe('views/Contact', () => {
  let component

  beforeEach(() => {
    component = shallow(<Contact />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
