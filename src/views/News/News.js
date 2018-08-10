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
import H1 from '../../components/Typography/H1'

import type { RecentlyType } from '../../types'

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  grid-column-gap: 5%;
  grid-row-gap: 10%;
  align-items: start;

  .first {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;

    .first {
      grid-column: 1 / span 2;
    }
  }
`

const FillerWrapper = styled(Wrapper)`
  padding: 3rem 0;
`

const Article = styled.article`
  margin: 1rem 0;
  padding: 2rem 0;
  border-bottom: 1px solid #ee307f;

  p {
    line-height: 150%;
    font-weight: 300;
    color: #4f4f4f;
    font-size: 18px;
    margin-bottom: 1rem;
  }

  .link-more {
    display: none;
  }

  img {
    width: auto;
    height: auto;
    margin: 1.5rem auto;
    max-height: 400px;
    text-align: center;
  }

  main {
    margin-top: 1.5vw;
  }
`

const Linked = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

const SmallBlock = styled(Small)`
  display: block;
`

const ReadMoreLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  text-align: right;
  color: #ee307f;
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

      const { id, content, slug, title, excerpt } = item

      const isFirst = recentlies.indexOf(item) === 0

      return (
        <Article className={isFirst && 'first'} data-test="article" key={id}>
          {!isFirst ? (
            <Linked to={`news/${slug}`}>
              <H2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
            </Linked>
          ) : (
            <H1 dangerouslySetInnerHTML={{ __html: title.rendered }} />
          )}
          <SmallBlock
            dangerouslySetInnerHTML={{
              __html: dateFormatted.toLocaleDateString('en-EN', options),
            }}
          />
          {!isFirst &&
            item.media &&
            item.media.guid &&
            item.media.guid.rendered.length > 0 && (
              <img
                alt={title.rendered}
                src={item.media && item.media.guid.rendered}
              />
            )}
          {isFirst ? (
            <main dangerouslySetInnerHTML={{ __html: content.rendered }} />
          ) : (
            <main dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          )}
          {!isFirst && (
            <ReadMoreLink to={`news/${slug}`}>Read more...</ReadMoreLink>
          )}
        </Article>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
        <MainHeader darkColor />
        {this.props.recentlies.length ? (
          <Wrapper>
            <Grid>{this.renderArticles()}</Grid>
          </Wrapper>
        ) : (
          <React.Fragment>
            <FillerWrapper>
              <H2>Loading content...</H2>
            </FillerWrapper>
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
