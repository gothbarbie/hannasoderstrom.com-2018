import React from 'react'
import { shallow } from 'enzyme'

import Work from '../index'

describe('views/Work', () => {
  let component

  beforeEach(() => {
    component = shallow(<Work />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
