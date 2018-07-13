import React from 'react'
import { shallow } from 'enzyme'

import LoadingSpinner from './index'

describe('components/LoadingSpinner', () => {
  let component

  beforeEach(() => {
    component = shallow(<LoadingSpinner />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
