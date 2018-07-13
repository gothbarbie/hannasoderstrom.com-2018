import React from 'react'
import { shallow } from 'enzyme'

import Image from './index'

describe('components/Image', () => {
  let component

  beforeEach(() => {
    component = shallow(<Image />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
