import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { SET_RECENTLIES } from './types'
import { fetchRecentlies, fetchRecently } from './index'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const axiosMock = new MockAdapter(axios)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  // TODO: Implement Promise.all()
  describe('#fetchRecentlies', () => {
    beforeEach(() => {
      axiosMock
        .onGet('http://hannasoderstrom.com/admin/wp-json/wp/v2/posts')
        .reply(200, [
          {
            id: 1,
            date: '2016-04-13T12:17:09',
            slug: 'number-one',
            title: { rendered: 'Number One' },
            excerpt: { rendered: '<p>Some text about stuff.</p>' },
            content: { rendered: '<p>Some text about stuff.</p>' },
            featured_media: 1,
          },
          {
            id: 2,
            date: '2016-04-14T12:17:09',
            slug: 'number-two',
            title: { rendered: 'Number Two' },
            excerpt: { rendered: '<p>Some other text about stuff.</p>' },
            content: { rendered: '<p>Some other text about stuff.</p>' },
            featured_media: 1,
          },
        ])
      axiosMock
        .onGet('http://hannasoderstrom.com/admin/wp-json/wp/v2/media/1')
        .reply(200, {
          media: { rendered: '' },
        })
    })

    afterEach(() => {
      axiosMock.reset()
    })

    xit('returns recentlies from the CMS', () => {
      const store = mockStore()
      const recentlies = {
        payload: [
          {
            id: 1,
            date: '2016-04-13T12:17:09',
            slug: 'number-one',
            title: { rendered: 'Number One' },
            excerpt: { rendered: '<p>Some text about stuff.</p>' },
            content: { rendered: '<p>Some text about stuff.</p>' },
            media: { rendered: '' },
          },
          {
            id: 2,
            date: '2016-04-14T12:17:09',
            slug: 'number-two',
            title: { rendered: 'Number Two' },
            excerpt: { rendered: '<p>Some other text about stuff.</p>' },
            content: { rendered: '<p>Some other text about stuff.</p>' },
            media: { rendered: '' },
          },
        ],
        type: SET_RECENTLIES,
      }

      try {
        return store.dispatch(fetchRecentlies()).then(() => {
          const expectedActions = store.getActions()
          expect(expectedActions[2]).toEqual(recentlies)
        })
      } catch (error) {}
    })
  })

  describe('#fetchRecently', () => {
    beforeEach(() => {
      axiosMock
        .onGet(
          'http://hannasoderstrom.com/admin/wp-json/wp/v2/posts?slug=number-two'
        )
        .reply(200, [
          {
            id: 2,
            date: '2016-04-14T12:17:09',
            slug: 'number-two',
            title: { rendered: 'Number Two' },
            excerpt: { rendered: '<p>Some other text about stuff.</p>' },
            content: { rendered: '<p>Some other text about stuff.</p>' },
          },
        ])
    })

    afterEach(() => {
      axiosMock.reset()
    })

    it('returns specific recently by slug', () => {
      const store = mockStore()
      const recently = {
        payload: [
          {
            id: 2,
            date: '2016-04-14T12:17:09',
            slug: 'number-two',
            title: { rendered: 'Number Two' },
            excerpt: { rendered: '<p>Some other text about stuff.</p>' },
            content: { rendered: '<p>Some other text about stuff.</p>' },
          },
        ],
        type: SET_RECENTLIES,
      }

      return store.dispatch(fetchRecently('number-two')).then(() => {
        const expectedActions = store.getActions()
        expect(expectedActions[1]).toEqual(recently)
      })
    })
  })
})
