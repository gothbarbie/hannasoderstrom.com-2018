import React from 'react'
import styled from 'styled-components'

import Logo from '../../Logo'
import SocialMedia from '../../SocialMedia'
import Wrapper from '../Wrapper'

const Footer = styled.footer`
  padding: 2rem;
  background: #f7f7f7;
  position: relative;
  border-bottom: 9px solid #c4c4c4;

  @media (min-width: 800px) {
    padding: 5% 0;
  }
`

const LogoStyle = styled.div`
  text-decoration: none;
  margin-bottom: 3vw;
  align-self: flex-start;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`

const FooterWrapper = styled(Wrapper)`
  padding: 1rem 4%;
  flex-wrap: wrap;
  position: relative;
`

const MainFooter = () => (
  <Footer>
    <FooterWrapper maxWidth="1340px">
      <LogoStyle>
        <Logo darkColor />
      </LogoStyle>
      <SocialMedia darkColor />
    </FooterWrapper>
  </Footer>
)

export default MainFooter
