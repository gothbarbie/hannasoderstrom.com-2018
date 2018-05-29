// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { fetchRecentlies } from '../../actions'

import Wrapper from '../../components/Layout/Wrapper'
import LoadingSpinner from '../../components/LoadingSpinner'

const Grid = styled.section`
  width: 100%;
  display: grid;
  padding: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr;
  grid-column-gap: 5%;
  grid-row-gap: 10%;
  align-items: start;

  & img {
    min-height: 100px;
  }

  .first {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;

    & img {
      min-height: 200px;
    }
  }
`

const Article = styled.article`
  margin: 1rem 0;
`

const Linked = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
`

type Props = {
  loading: boolean,
  fetchRecentlies: Function,
  recentlies: Array<{}>,
}

export class Recently extends Component<Props> {
  componentDidMount () {
    this.props.fetchRecentlies()
  }

  renderArticles () {
    const { recentlies } = this.props

    if (!recentlies.length) return null

    return recentlies.map(item => {
      return (
        <Article
          className={item.id === '1' && 'first'}
          data-test="article"
          key={item.id}
        >
          <Linked to={`recently/${item.slug}`}>
            <H2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
          </Linked>
        </Article>
      )
    })
  }

  render () {
    if (this.props.loading) return <LoadingSpinner />

    return (
      <Wrapper>
        <Grid>{this.renderArticles()}</Grid>
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
  fetchRecentlies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Recently)
