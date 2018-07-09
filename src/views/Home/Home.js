import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import imgComputer400 from '../../images/bg/computer_400.jpg'
import imgComputer1000 from '../../images/bg/computer_1000.jpg'
import imgComputer1500 from '../../images/bg/computer_1500.jpg'
import imgHanna from '../../images/hanna2018.jpg'
import imgKristina from '../../images/kristina.jpg'

import SocialMedia from '../../components/SocialMedia'
import H2 from '../../components/H2'
import Paragraph from '../../components/Paragraph'

const Hero = styled.section`
  background-image: url(${imgComputer400});
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;

  @media (min-width: 550px) {
    background-image: url(${imgComputer1000});
  }

  @media (min-width: 1200px) {
    background-image: url(${imgComputer1500});
  }
`

const H1 = styled.h1`
  font-family: 'Shadows Into Light', sans-serif;
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
  margin: 20% auto;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`

const AboutMe = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 70%;
  margin: 10% auto;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 10%;
    align-items: center;
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 0 auto 2vw;

  @media (min-width: 1000px) {
    max-width: 100%;
  }
`

const SmallAvatar = styled.img`
  border-radius: 50%;
  width: 50%;
  height: auto;
`

const Quotes = styled.section`
  background: rgba(58, 28, 113, 0.06);
  display: grid;
  justify-content: center;
  padding: 5%;
  grid-template-columns: 1fr;
  grid-column-gap: 6%;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Quoter = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Quote = styled.p`
  margin: 2rem 0;
  line-height: 1.5;
`

const Name = styled.p`
  font-size: 0.9rem;
  line-height: 1.4rem;
  text-align: center;
`

const Home = () => (
  <section>
    <Hero>
      <H1 data-test="title">
        Hi there, I'm Hanna!<br />
        I build web applications. :-)
      </H1>
    </Hero>
    <SocialMedia />
    <AboutMe>
      <Avatar alt="Hanna Söderström" src={imgHanna} />
      <div>
        <H2>About me</H2>
        <Paragraph>
          As a kid I dreamed of being an inventor, creating really cool machines
          and find solutions to problems people couldn’t imagine.
        </Paragraph>
        <Paragraph>
          I grew up, someone made the Internet and I eventually became a web
          developer.
        </Paragraph>
        <Paragraph>
          Now I work with teams building awesome web applications and find
          really cool solutions to problems most people can’t imagine! ;)
        </Paragraph>
        <Paragraph>
          Want more specific examples and details?{' '}
          <Link to="/experience">Check out my experience</Link>.
        </Paragraph>
      </div>
    </AboutMe>
    <Quotes>
      <Quoter>
        <SmallAvatar alt="Kristina Herngren" src={imgKristina} />
        <Quote>
          <em>
            &quot;I have worked with Hanna in groups developing business culture
            and structure. Hanna is keen and responsive, smart and engaged and
            her presence strongly contributes to the experience of working at
            Iteam.&quot;
          </em>
        </Quote>
        <Name>
          Kristina Herngren<br />
          Agency Director at Iteam Solutions AB
        </Name>
      </Quoter>
    </Quotes>
  </section>
)

export default Home
