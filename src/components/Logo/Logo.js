import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import imgLogo from '../../images/icon.png'

const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const Icon = styled.img`
  max-width: 50px;
`

const Text = styled.div`
  color: ${({ darkColor }) => (darkColor ? '#888' : '#fff')};
  text-align: right;
  line-height: 1.3;
  margin-left: 1.5vw;
  font-size: 1.125rem;

  ${({ inHeader }) =>
    inHeader &&
    `
    display: none;

    @media (min-width: 650px) {
      display: block;
    }
  `};
`

const WebDeveloper = styled.div`
  font-size: 0.75rem;
`

const Logo = ({ darkColor, inHeader }) => (
  <LinkStyle to="/">
    <Icon src={imgLogo} />
    <Text inHeader={inHeader} darkColor={darkColor}>
      Hanna Söderström
      <WebDeveloper>&lt;Web Developer/&gt;</WebDeveloper>
    </Text>
  </LinkStyle>
)

export default Logo
