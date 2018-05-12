import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import MainNavigation from '../MainNavigation'

const Header = styled.header`
  padding: 1rem 2rem;
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
