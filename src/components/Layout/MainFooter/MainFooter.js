import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '../../Logo'
import SocialMediaSmall from '../../SocialMediaSmall'
import MainNavigation from '../MainNavigation'

import imgTheresMore from '../../../images/theres-more.svg'

const Footer = styled.footer`
  padding: 2rem;
  background: #313131;
  position: relative;

  @media (min-width: 800px) {
    padding: 5% 0;
  }
`

const Linked = styled(Link)`
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

const FooterWrapper = styled.div`
  max-width: 1140px;
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 4%;
  flex-wrap: wrap;
  position: relative;

  nav {
    margin-top: 5%;

    @media (min-width: 640px) {
      margin-top: 0;
    }
  }

  section {
    @media (min-width: 800px) {
      margin-right: 5%;
    }
  }
`

const LeftArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    align-items: start;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const MainFooter = () => (
  <Footer>
    <FooterWrapper>
      <LeftArea>
        <Linked to="/">
          <Logo />
        </Linked>
        <SocialMediaSmall />
      </LeftArea>
      <MainNavigation />
      <Img src={imgTheresMore} />
    </FooterWrapper>
  </Footer>
)

export default MainFooter
