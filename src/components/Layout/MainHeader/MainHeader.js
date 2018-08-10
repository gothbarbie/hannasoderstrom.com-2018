// @flow
import * as React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import MainNavigation from '../MainNavigation'

import SocialMedia from '../../SocialMedia'

type MainHeaderProps = {
  absolute: boolean,
  darkColor: boolean,
}

const Header = styled.header`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

const MainHeader = ({ absolute, darkColor }: MainHeaderProps) => {
  return (
    <Header absolute={absolute}>
      <Wrapper maxWidth="1340px">
        <Logo darkColor={darkColor} inHeader />
        <MainNavigation
          currentPath={window.location.pathname}
          darkColor={darkColor}
        />
        <SocialMedia darkColor={darkColor} inHeader />
      </Wrapper>
    </Header>
  )
}

export default MainHeader
