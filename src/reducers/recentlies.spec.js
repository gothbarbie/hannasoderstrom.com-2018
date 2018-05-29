import { SET_RECENTLIES } from '../actions/types'
import recentlies from './recentlies'

describe('reducers/recentlies', () => {
  it('sets recentlies', () => {
    const recentliesContent = [
      {
        id: 1,
        date: '2016-04-13T12:17:09',
        slug: 'number-one',
        title: { rendered: 'Number One' },
        excerpt: { rendered: '<p>Some text about stuff.</p>' },
        content: { rendered: '<p>Some text about stuff.</p>' },
      },
      {
        id: 2,
        date: '2016-04-14T12:17:09',
        slug: 'number-two',
        title: { rendered: 'Number Two' },
        excerpt: { rendered: '<p>Some other text about stuff.</p>' },
        content: { rendered: '<p>Some other text about stuff.</p>' },
      },
    ]

    expect(
      recentlies([], {
        type: SET_RECENTLIES,
        payload: recentliesContent,
      })
    ).toEqual(recentliesContent)
  })
})
