import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import SocialMediaSmall from '../../SocialMediaSmall'
import MainNavigation from '../MainNavigation'

const Footer = styled.footer`
  padding: 5rem 2rem;
  background: #313131;
  position: relative;
`

const Linked = styled(Link)`
  text-decoration: none;
`

const Circle = styled.div`
  position: absolute;
  left: calc(50% - 50px);
  top: -35px;
  width: 100px;
  height: 50px;
  border-radius: 50%;
  background: #f3f2f6;
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
    <Circle />
  </Footer>
)

export default MainFooter
