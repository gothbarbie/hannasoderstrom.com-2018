import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & li {
    margin: 0 4vw 0 0;
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
`

const SocialMediaSmall = () => (
  <Section>
    <ul>
      <li>
        <a href="https://github.com/gothbarbie/hannasoderstrom.com-2018">
          <Icon className="fab fa-github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/hannasoderstromwebdev/">
          <Icon className="fab fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@gothbarbie84">
          <Icon className="fab fa-medium" />
        </a>
      </li>
    </ul>
  </Section>
)

export default SocialMediaSmall
