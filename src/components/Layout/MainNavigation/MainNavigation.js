import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Icon from '../../Icon'

const Nav = styled.nav`
  display: flex;
  align-items: center;

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & li {
    margin: 0 0 0 3vw;
  }

  & a {
    & :hover {
      border-bottom: 4px solid white;
    }
  }
`

const HomeLinkWithActive = styled(Link)`
  color: ${({ active }) =>
    active === 'active' ? '#fff' : 'rgba(255, 255, 255, 0.65)'};
  text-decoration: none;
  border-bottom: ${({ active }) =>
    active === 'active' ? '4px solid white' : ''};
`

const LinkWithActive = HomeLinkWithActive.extend`
  padding-bottom: 0.375rem;
`

class MainNavigation extends Component {
  constructor () {
    super()

    this.state = {
      currentRoute: window.location.pathname,
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.currentRoute !== this.state.currentRoute
  }

  render () {
    const { currentRoute } = this.state
    return (
      <Nav>
        <ul>
          <li>
            <HomeLinkWithActive
              active={currentRoute === '/' ? 'active' : ''}
              data-test="home-link"
              to="/"
            >
              <Icon name="home" />
            </HomeLinkWithActive>
          </li>
            <li>
              <LinkWithActive
                active={currentRoute === '/recently' ? 'active' : ''}
                data-test="recently-link"
                to="/recently"
            >
              Recently
              </LinkWithActive>
            </li>
              <li>
                <LinkWithActive
                  active={currentRoute === '/experience' ? 'active' : ''}
                  data-test="experience-link"
                  to="/experience"
            >
              Experience
                </LinkWithActive>
              </li>
                <li>
                  <LinkWithActive
                    active={currentRoute === '/contact' ? 'active' : ''}
                    data-test="contact-link"
                    to="/contact"
            >
              Contact
                  </LinkWithActive>
                </li>
        </ul>
      </Nav>
    )
  }
}

export default MainNavigation
