// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0,0,0,.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0,0,0,0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0,0,0,0);
  }
`

const IconStyle = styled.span`
  color: ${({ color }) => color};
  font-size: 2rem;
  font-size: ${({ size }) => size && size + 'rem'};
  padding: 5px;

  &:hover {
    ${({ pulseAnimation }) =>
      pulseAnimation &&
      `
      border-radius: 50%;
      box-shadow: 0 0 0 rgba(0, 0, 0, .4);
      animation: ${Pulse} 1s infinite;
    `};
  }
`

type Props = {
  name: string,
  isBrand?: boolean,
  pulseAnimation?: boolean,
  size?: string,
  color?: string,
}

const Icon = ({ color, isBrand, pulseAnimation, size, name }: Props) => (
  <IconStyle color={color} pulseAnimation={pulseAnimation} size={size}>
    <i className={`${isBrand ? 'fab' : 'fas'} fa-${name}`} />
  </IconStyle>
)

export default Icon
