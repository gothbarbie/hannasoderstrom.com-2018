import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.div`
  color: #fff;
  text-align: right;
`

const WebDeveloper = styled.div`
  font-size: 0.8rem;
`

const Logo = () => (
  <LogoStyled>
    <strong>Hanna</strong>Söderström
    <WebDeveloper>|Web Developer</WebDeveloper>
  </LogoStyled>
)

export default Logo
