// @flow
import React from 'react'
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
        <Logo />
        <MainNavigation currentPath={window.location.pathname} />
        {window.location.pathname === '/' && (
          <HeroComments src={imgHeroComments} />
        )}
      </Wrapper>
    </Header>
  )
}

export default MainHeader