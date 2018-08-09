// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { fetchRecentlies } from '../../actions'

import Wrapper from '../../components/Layout/Wrapper'
import MainHeader from '../../components/Layout/MainHeader'
import MainFooter from '../../components/Layout/MainFooter'
import LoadingSpinner from '../../components/LoadingSpinner'
import Small from '../../components/Typography/Small'

import type { RecentlyType } from '../../types'

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr;
  grid-column-gap: 5%;
  grid-row-gap: 10%;
  align-items: start;

  .first {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const FillerGrid = styled.section`
  width: 100%;
  display: flex;
  margin: 3rem 0;
`

const FakeArticleOne = styled.article`
  background: #eee;
  height: 500px;
  width: 495px;
  margin: 0 5% 0 0;
`

const FakeArticleTwo = styled.article`
  background: #eee;
  height: 400px;
  width: 221px;
  margin: 0 5% 0 0;
`

const FakeArticleThree = styled.article`
  background: #eee;
  height: 300px;
  width: 221px;
`

const Article = styled.article`
  margin: 3rem 0;

  p {
    line-height: 150%;
    font-weight: 300;
    color: #4f4f4f;
    font-size: 18px;
  }

  .link-more {
    margin-top: 1rem;
    text-align: right;
  }

  img {
    width: 100%;
    height: auto;
    margin: 1.5rem 0 0;
  }

  main {
    margin-top: 1.5vw;
  }
`

const Linked = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`

type Props = {
  loading: boolean,
  fetchRecentlies: Function,
  recentlies: RecentlyType[],
}

export class News extends Component<Props> {
  componentDidMount() {
    this.props.fetchRecentlies()
  }

  renderArticles() {
    const { recentlies } = this.props

    return recentlies.map(item => {
      const dateFormatted = new Date(item.date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }

      const { id, slug, title, excerpt } = item

      return (
        <Article
          className={recentlies.indexOf(item) === 0 && 'first'}
          data-test="article"
          key={id}
        >
          <Linked to={`recently/${slug}`}>
            <H2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
            {item.media.guid.rendered.length > 0 && (
              <img
                alt={title.rendered}
                src={item.media && item.media.guid.rendered}
              />
            )}
            <Small
              dangerouslySetInnerHTML={{
                __html: dateFormatted.toLocaleDateString('en-EN', options),
              }}
            />
            <main dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          </Linked>
        </Article>
      )
    })
  }

  render() {
    //if (this.props.loading) return <LoadingSpinner />

    return (
      <React.Fragment>
        <MainHeader darkColor />
        {this.props.recentlies.length ? (
          <Wrapper>
            <Grid>{this.renderArticles()}</Grid>
          </Wrapper>
        ) : (
          <React.Fragment>
            <Wrapper>
              <FillerGrid>
                <FakeArticleOne />
                <FakeArticleTwo />
                <FakeArticleThree />
              </FillerGrid>
            </Wrapper>
            <LoadingSpinner />
          </React.Fragment>
        )}

        <MainFooter />
      </React.Fragment>
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
  fetchRecentlies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
