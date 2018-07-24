// @flow

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import imgPanda from '../../images/sadpanda.gif'

import Wrapper from '../Layout/Wrapper'
import H1 from '../Typography/H1'
import P from '../Typography/P'

type MessageType = { response?: { status?: number } }

type ErrorType = {
  error: boolean,
  message?: MessageType,
}

type ErrorProps = {
  error: ErrorType,
}

const ErrorContainer = styled.section`
  p:last-of-type {
    margin-top: 0;
  }

  h1 {
    margin: 0;
  }
`

const ErrorMessage = styled.p`
  color: white;
  font-weight: 500;
  margin: 1rem 0;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.5);
  padding: 1rem;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5vw;
`

export const Error = ({ error }: ErrorProps) => {
  if (!error.error || !error.message) return null

  const { message } = error

  const status = message.response && message.response.status

  let userFriendlyMsg = ''
  let userFriendlyTitle = ''

  switch (status) {
    case 404:
      userFriendlyTitle = 'Sorry!'
      userFriendlyMsg =
        'Could not retrieve content. This is most likely a temporary issue.'
      break

    default:
      break
  }

  return (
    <ErrorContainer>
      <Wrapper column>
        <H1>{userFriendlyTitle}</H1>
        {userFriendlyMsg && <ErrorMessage>{userFriendlyMsg}</ErrorMessage>}
        {userFriendlyMsg && <P>(Please enjoy this cute panda cub instead)</P>}
        {userFriendlyMsg && <Img alt="sad panda" src={imgPanda} />}
      </Wrapper>
    </ErrorContainer>
  )
}

const mapStateToProps = ({ error }) => {
  return {
    error,
  }
}

export default connect(mapStateToProps)(Error)
