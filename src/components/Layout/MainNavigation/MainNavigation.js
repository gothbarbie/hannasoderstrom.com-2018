import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  align-items: center;

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & li {
    margin: 0 0 0 5.5vw;
    font-size: 22px;
  }

  & li:first-of-type {
    margin-left: 0;
  }

  & a {
    & :hover {
      border-bottom: 4px solid white;
    }
  }
`

const HomeLinkWithActive = styled(Link)`
  color: #fff;
  text-decoration: none;
  border-bottom: ${({ active }) =>
    active === 'active' ? '2px solid #EE307F' : ''};
`

const LinkWithActive = HomeLinkWithActive.extend`
  padding-bottom: 0.375rem;
`

class MainNavigation extends Component {
  constructor() {
    super()

    this.state = {
      currentRoute: window.location.pathname,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentRoute !== this.state.currentRoute
  }

  render() {
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
              About
            </HomeLinkWithActive>
          </li>
          <li>
            <LinkWithActive
              active={currentRoute === '/news' ? 'active' : ''}
              data-test="recently-link"
              to="/news"
            >
              News
            </LinkWithActive>
          </li>
          <li>
            <LinkWithActive
              active={currentRoute === '/work' ? 'active' : ''}
              data-test="experience-link"
              to="/work"
            >
              Work
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
