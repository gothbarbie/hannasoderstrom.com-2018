// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchRecently } from '../../actions'

import Wrapper from '../../components/Layout/Wrapper'
import Small from '../../components/Small'
import LoadingSpinner from '../../components/LoadingSpinner'

const WrapperSmall = styled.section`
  max-width: 600px;
  margin: 5% auto;
  padding: 0 2rem;
`

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

type Props = {
  loading: boolean,
  fetchRecently: Function,
  recentlies: Array<{}>,
}

class Article extends Component<Props> {
  componentDidMount () {
    const url = decodeURI(window.location.pathname).split('/')
    const slug = url[2]
    const regex = new RegExp(/([A-Za-z0-9\-])+/g)

    if (regex.test(decodeURI(slug))) {
      this.props.fetchRecently(slug)
    }
  }

  render () {
    if (this.props.loading) return <LoadingSpinner />

    if (!this.props.recentlies.length) return <p>Not found.</p>

    const { content, title } = this.props.recentlies[0]

    return (
      <Wrapper>
        <Link to="/recently">← Back</Link>
          <WrapperSmall>
            <H1 dangerouslySetInnerHTML={{ __html: title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Article)
