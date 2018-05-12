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

const MainFooter = () => (
  <Footer>
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
      <SocialMediaSmall />
      <MainNavigation />
    </Wrapper>
  </Footer>
)

export default MainFooter
