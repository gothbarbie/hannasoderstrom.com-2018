// @flow
import React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import MainNavigation from '../MainNavigation'

import SocialMedia from '../../SocialMedia'

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

const MainHeader = () => {
  return (
    <Header>
      <Wrapper maxWidth="1340px">
        <Logo />
        <MainNavigation currentPath={window.location.pathname} />
        <SocialMedia />
      </Wrapper>
    </Header>
  )
}

export default MainHeader
