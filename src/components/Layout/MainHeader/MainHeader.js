// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import MainNavigation from '../MainNavigation'

import imgHeroComments from '../../../images/menu-comments.svg'

const Header = styled.header`
  background: #3a1c71;
`

const HeroComments = styled.img`
  position: absolute;
  bottom: -80px;
  right: 4%;
  width: 350px;
  z-index: 2;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`

const MainHeader = () => {
  return (
    <Header>
      <Wrapper>
        <Link to="/">
          <Logo />
        </Link>
        <MainNavigation />
        <HeroComments src={imgHeroComments} />
      </Wrapper>
    </Header>
  )
}

export default MainHeader
