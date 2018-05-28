import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home'

describe('views/Home', () => {
  let component

  beforeEach(() => {
    component = shallow(<Home />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
