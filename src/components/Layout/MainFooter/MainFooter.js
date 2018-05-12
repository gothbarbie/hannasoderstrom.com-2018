import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import SocialMediaSmall from '../../SocialMediaSmall'
import MainNavigation from '../MainNavigation'

const Footer = styled.footer`
  padding: 5rem 2rem;
  background: #d76d77;
`

const Linked = styled(Link)`
  text-decoration: none;
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
  </Footer>
)

export default MainFooter
