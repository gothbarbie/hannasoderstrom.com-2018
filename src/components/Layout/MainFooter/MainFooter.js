import React from 'react'
import styled from 'styled-components'

import Logo from '../../Logo'
import SocialMedia from '../../SocialMedia'
import MainNavigation from '../MainNavigation'
import Wrapper from '../Wrapper'

import imgTheresMore from '../../../images/theres-more.svg'

const Footer = styled.footer`
  padding: 2rem;
  background: #313131;
  position: relative;

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

const Img = styled.img`
  position: absolute;
  right: 14%;
  top: -10%;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  @media (min-width: 800px) {
    top: -40%;
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
        <Logo />
      </LogoStyle>
      <SocialMedia />
    </FooterWrapper>
  </Footer>
)

export default MainFooter
