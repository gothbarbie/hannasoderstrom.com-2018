// @flow
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchRecently } from '../../actions'

import Wrapper from '../../components/Layout/Wrapper'
import LoadingSpinner from '../../components/LoadingSpinner'
import H1 from '../../components/H1'

const WrapperSmall = styled.section`
  max-width: 600px;
  margin: 5% auto;
  padding: 0 2rem;
`

type Props = {
  loading: boolean,
  fetchRecently: Function,
  history: {
    push: Function,
  },
  recentlies: Array<{}>,
}

class Article extends Component<Props> {
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

    if (!this.props.recentlies.length)
      return this.props.history.push('/not-found')

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Article))
