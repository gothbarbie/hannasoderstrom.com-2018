// @flow
import React from 'react'
import styled from 'styled-components'

type SocialMediaProps = {
  darkColor: boolean,
  inHeader: boolean,
}

const Section = styled.section`
  display: flex;
  align-items: center;

  ${({ inHeader }) =>
    inHeader &&
    `
      display: none;
  
      @media (min-width: 850px) {
        display: flex;
      }
  `};

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  & li {
    margin: 0 3vw 0 0;
  }

  & li:last-of-type {
    margin-right: 0;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`
const Icon = styled.i`
  font-size: 2rem;
  color: ${({ darkColor }) => (darkColor ? '#888' : '#fff')};
  animation-name: spin;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.13, 0.85, 1, 0.4);

  &:hover {
    color: #eee;
  }

  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }

    to {
      transform: rotateY(360deg);
    }
  }

  @media (min-width: 1700px) {
    font-size: 2vw;
  }
`

const SocialMedia = ({ darkColor, inHeader }: SocialMediaProps) => (
  <Section inHeader={inHeader}>
    <ul>
      <li>
        <a href="https://github.com/gothbarbie/hannasoderstrom.com-2018">
          <Icon className="fab fa-github" darkColor={darkColor} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/hannasoderstromwebdev/">
          <Icon className="fab fa-linkedin" darkColor={darkColor} />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@gothbarbie84">
          <Icon className="fab fa-medium" darkColor={darkColor} />
        </a>
      </li>
    </ul>
  </Section>
)

export default SocialMedia
