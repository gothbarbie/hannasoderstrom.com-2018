import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & a {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`
const Icon = styled.i`
  font-size: 2rem;
  color: #fff;
  margin-right: 1rem;
`

const SocialMediaSmall = () => (
  <Section>
    <ul>
      <li>
        <a href="#">
          <Icon className="fab fa-github" />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon className="fab fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon className="fab fa-medium" />
        </a>
      </li>
    </ul>
  </Section>
)

export default SocialMediaSmall
