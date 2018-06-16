import React from 'react'
import styled from 'styled-components'

const LogoBig = styled.div`
  color: #fff;
  text-align: right;
  display: none;

  @media (min-width: 540px) {
    display: block;
  }
`

const WebDeveloper = styled.div`
  font-size: 0.8rem;
`

const LogoSmall = styled.div`
  color: #fff;
  font-size: 2rem;
  text-align: left;

  @media (min-width: 540px) {
    display: none;
  }
`

const Logo = () => (
  <div>
    <LogoBig>
      <strong>Hanna</strong>Söderström
      <WebDeveloper>|Web Developer</WebDeveloper>
    </LogoBig>
    <LogoSmall>
      <strong>H</strong>S
    </LogoSmall>
  </div>
)

export default Logo
