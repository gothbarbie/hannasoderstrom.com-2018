import React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from 'enzyme'

import { Error } from '../Error'

const mockStore = configureMockStore()

describe('components/Error', () => {
  let component
  let store

  beforeEach(() => {
    store = mockStore()

    component = render(
      <Error
        error={{ error: true, message: { response: { status: 404 } } }}
        store={store}
      />
    )
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  })
})
