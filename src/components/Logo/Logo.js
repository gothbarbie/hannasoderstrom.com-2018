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
  color: #fff;
  text-align: right;
  display: none;
  line-height: 1.3;
  margin-left: 1.5vw;
  font-size: 1.125rem;

  @media (min-width: 540px) {
    display: block;
  }
`

const WebDeveloper = styled.div`
  font-size: 0.75rem;
`

const Logo = () => (
  <LinkStyle to="/">
    <Icon src={imgLogo} />
    <Text>
      Hanna Söderström
      <WebDeveloper>&lt;Web Developer/&gt;</WebDeveloper>
    </Text>
  </LinkStyle>
)

export default Logo
