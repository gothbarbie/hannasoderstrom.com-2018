// @flow
import React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import MainNavigation from '../MainNavigation'

import SocialMedia from '../../SocialMedia'

const Header = styled.header`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

const MainHeader = ({ absolute, darkColor }) => {
  return (
    <Header absolute={absolute}>
      <Wrapper maxWidth="1340px">
        <Logo inHeader darkColor={darkColor} />
        <MainNavigation
          currentPath={window.location.pathname}
          darkColor={darkColor}
        />
        <SocialMedia inHeader darkColor={darkColor} />
      </Wrapper>
    </Header>
  )
}

export default MainHeader
