// @flow
export type RecentlyType = {
  id: string,
  slug: string,
  content: {
    rendered: string,
  },
  excerpt: {
    rendered: string,
  },
  date: string,
  title: {
    rendered: string,
  },
  media: {
    guid?: {
      rendered: string,
    },
  },
}
