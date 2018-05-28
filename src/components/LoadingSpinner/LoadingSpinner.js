import React from 'react'
import styled, { keyframes } from 'styled-components'

import Icon from '../Icon'

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  & span {
    animation: ${rotating} 1s linear infinite;
  }
`

const LoadingSpinner = () => (
  <Spinner>
    <Icon name="spinner" />
  </Spinner>
)

export default LoadingSpinner
