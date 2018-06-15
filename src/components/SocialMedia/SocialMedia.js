import React from 'react'
import styled from 'styled-components'

import imgMoreAboutMe from '../../images/more-about-me.svg'

const Section = styled.section`
  background: #3a1c71;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  position: relative;

  & ul {
    width: 100%;
    max-width: 700px;
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
  font-size: 5vw;
  color: #fff;
  margin-right: 1rem;

  @media (min-width: 1100px) {
    font-size: 4rem;
  }
`

const Circle = styled.div`
  position: absolute;
  left: calc(50% - 25px);
  bottom: -1.5vw;
  width: 7vw;
  height: 5vw;
  border-radius: 50%;
  background: #3a1c71;
`

const Img = styled.img`
  position: absolute;
  right: 2%;
  bottom: 10%;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;

  @media (min-width: 950px) {
    visibility: visible;
    opacity: 1;
  }
`

const SocialMedia = () => (
  <Section>
    <ul>
      <li>
        <a
          data-test="github-link"
          href="https://github.com/gothbarbie/hannasoderstrom.com-2018"
        >
          <Icon className="fab fa-github" /> Github
        </a>
      </li>
      <li>
        <a
          data-test="linkedin-link"
          href="https://www.linkedin.com/in/hannasoderstromwebdev/"
        >
          <Icon className="fab fa-linkedin" /> LinkedIn
        </a>
      </li>
      <li>
        <a data-test="medium-link" href="https://medium.com/@gothbarbie84">
          <Icon className="fab fa-medium" /> Medium
        </a>
      </li>
    </ul>
    <Circle />
    <Img src={imgMoreAboutMe} />
  </Section>
)

export default SocialMedia
