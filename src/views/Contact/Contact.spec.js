import React from 'react'
import { shallow } from 'enzyme'

import Contact from './Contact'

describe('views/Contact', () => {
  let component

  beforeEach(() => {
    component = shallow(<Contact />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
