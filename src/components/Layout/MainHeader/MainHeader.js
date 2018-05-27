// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import MainNavigation from '../MainNavigation'

const Header = styled.header`
  background: #3a1c71;
`

const MainHeader = () => {
  return (
    <Header>
      <Wrapper>
        <Link to="/">
          <Logo />
        </Link>
        <MainNavigation />
      </Wrapper>
    </Header>
  )
}

export default MainHeader
