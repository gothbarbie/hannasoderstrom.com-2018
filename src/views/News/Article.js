// @flow
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchRecently } from '../../actions'

import Wrapper from '../../components/Layout/Wrapper'
import LoadingSpinner from '../../components/LoadingSpinner'
import H1 from '../../components/Typography/H1'
import Small from '../../components/Typography/Small'

import type { RouterHistory } from 'react-router-dom'

const WrapperSmall = styled.section`
  max-width: 600px;
  margin: 5% auto;
  padding: 0 2rem;

  p {
    line-height: 150%;
    font-weight: 300;
    color: #4f4f4f;
    font-size: 18px;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const Header = styled.header`
  margin-bottom: 2rem;
`

type Props = {
  loading: boolean,
  fetchRecently: Function,
  history: RouterHistory,
  recentlies: Array<{
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
  }>,
}

export class Article extends Component<Props> {
  componentDidMount () {
    const url = decodeURI(window.location.pathname).split('/')
    const slug = url[2]
    const regex = new RegExp(/([A-Za-z0-9-])+/g)

    if (regex.test(decodeURI(slug))) {
      this.props.fetchRecently(slug)
    }
  }

  render () {
    if (this.props.loading) return <LoadingSpinner />

    if (!this.props.recentlies.length) return null

    const { content, date, title } = this.props.recentlies[0]

    const dateFormatted = new Date(date)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    return (
      <Wrapper>
        <Link data-test="back-link" to="/news">
          ← Back
        </Link>
        <WrapperSmall>
          <Header>
            <H1
              dangerouslySetInnerHTML={{ __html: title.rendered }}
              data-test="article-title"
            />
            <Small
              dangerouslySetInnerHTML={{
                __html: dateFormatted.toLocaleDateString('en-EN', options),
              }}
            />
          </Header>
          <main
            className="main"
            dangerouslySetInnerHTML={{ __html: content.rendered }}
          />
        </WrapperSmall>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ recentlies, loading }) => {
  return {
    recentlies,
    loading,
  }
}

const mapDispatchToProps = {
  fetchRecently,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Article))
