import React from 'react'
import { shallow } from 'enzyme'

import MainHeader from './index'

describe('components/MainHeader', () => {
  let component

  beforeEach(() => {
    component = shallow(<MainHeader />)
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
