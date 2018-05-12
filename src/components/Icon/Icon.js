// @flow
import React from 'react'
import styled from 'styled-components'

const IconStyle = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size && size + 'rem'};
  font-size: 2rem;
`

type Props = {
  name: string,
  size?: string,
  color?: string,
}

const Icon = ({ name, size, color }: Props) => (
  <IconStyle color={color} size={size}>
    <i className={`fas fa-${name}`} />
  </IconStyle>
)

export default Icon
