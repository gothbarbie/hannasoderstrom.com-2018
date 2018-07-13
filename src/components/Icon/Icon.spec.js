import React from 'react'
import { shallow } from 'enzyme'

import Icon from './index'

describe('components/Icon', () => {
  let component

  beforeEach(() => {
    component = shallow(<Icon />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
