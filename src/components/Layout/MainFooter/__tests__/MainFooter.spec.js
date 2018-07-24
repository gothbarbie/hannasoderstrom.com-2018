import React from 'react'
import { shallow } from 'enzyme'

import MainFooter from '../index'

describe('components/MainFooter', () => {
  let component

  beforeEach(() => {
    component = shallow(<MainFooter />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
