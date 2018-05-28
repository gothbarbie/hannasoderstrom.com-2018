import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import SocialMediaSmall from '../../SocialMediaSmall'
import MainNavigation from '../MainNavigation'

import imgTheresMore from '../../../images/theres-more.svg'

const Footer = styled.footer`
  padding: 5rem 2rem;
  background: #313131;
  position: relative;
`

const Linked = styled(Link)`
  text-decoration: none;
`

const Img = styled.img`
  position: absolute;
  right: 15%;
  top: 20%;
`

const MainFooter = () => (
  <Footer>
    <Wrapper>
      <Linked to="/">
        <Logo />
      </Linked>
      <SocialMediaSmall />
      <MainNavigation />
    </Wrapper>
    <Img src={imgTheresMore} />
  </Footer>
)

export default MainFooter
