import React from 'react'
import { shallow } from 'enzyme'

import { Recently } from './Recently'
import { fetchRecentlies } from '../../actions/index'

describe('views/Recently', () => {
  let component
  let store
  let fetchRecentlies

  beforeEach(() => {
    fetchRecentlies = jest.fn()
    store = {
      dispatch: jest.fn(),
      getState: jest.fn(),
      subscribe: jest.fn(),
    }
    component = shallow(
      <Recently
        fetchRecentlies={fetchRecentlies}
        recentlies={[]}
        store={store}
      />
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
          title: { rendered: 'Hello' },
          content: { rendered: '<p>Hello world</p>' },
        },
      ],
    })
    expect(component).toMatchSnapshot()
  })

  describe('#fetchRecentlies', () => {
    it('has been called on mount', () => {
      expect(fetchRecentlies).toHaveBeenCalled()
    })
  })
})