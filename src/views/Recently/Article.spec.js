import React from 'react'
import { shallow } from 'enzyme'

import { Article } from './Article'

describe('views/Article', () => {
  let component
  let store
  let fetchRecently

  beforeEach(() => {
    fetchRecently = jest.fn()
    store = {
      dispatch: jest.fn(),
      getState: jest.fn(),
      subscribe: jest.fn(),
    }
    component = shallow(
      <Article fetchRecently={fetchRecently} recentlies={[]} store={store} />
    )
  })

  it('renders when no content', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders with content', () => {
    component.setProps({
      recentlies: [
        {
          id: 1,
          date: '2016-04-13T12:17:09',
          title: { rendered: 'Hello' },
          content: { rendered: '<p>Hello world</p>' },
        },
      ],
    })
    expect(component).toMatchSnapshot()
  })

  describe('#fetchRecently', () => {
    it('has been called on mount', () => {
      expect(fetchRecently).toHaveBeenCalled()
    })
  })
})
