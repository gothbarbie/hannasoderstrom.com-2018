import React from 'react'
import { shallow } from 'enzyme'

import { News } from '../News'

describe('views/News', () => {
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
    const recentlies = []
    component = shallow(
      <News
        fetchRecentlies={fetchRecentlies}
        recentlies={recentlies}
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
          slug: 'hello',
          excerpt: {
            rendered: '<p>Hello</p>',
          },
          date: 'today',
          content: { rendered: '<p>Hello world</p>' },
          media: {
            guid: {
              rendered: 'http://www.image.com/image01.jpg',
            },
          },
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
