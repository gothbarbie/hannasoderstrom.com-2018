import React from 'react'
import { shallow } from 'enzyme'

import NotFound404 from './index'

let component

describe('views/NotFound404', () => {
  beforeEach(() => {
    component = shallow(<NotFound404 />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
