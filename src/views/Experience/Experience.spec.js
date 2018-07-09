import React from 'react'
import { shallow } from 'enzyme'

import Experience from './index'

describe('views/Experience', () => {
  let component

  beforeEach(() => {
    component = shallow(<Experience />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
