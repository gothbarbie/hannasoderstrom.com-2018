import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import imgComputer from '../../images/computer.jpg'
import imgHanna from '../../images/hanna2018.jpg'
import imgKristina from '../../images/kristina.jpg'

import SocialMedia from '../../components/SocialMedia'
import H2 from '../../components/H2'
import Paragraph from '../../components/Paragraph'

const Hero = styled.section`
  background: url(${imgComputer});
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
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
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10%;
  align-items: center;
  margin: 10% auto;
  width: 70%;
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 6%;
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
          Now I build awesome web applications and find really cool solutions to
          problems most people can’t imagine! ;)
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
            &quot;Jag har arbetat med Hanna i grupper som utvecklar
            företagskultur och -struktur. Hanna är lyhörd, smart och engagerad
            och bidrar med sin närvaro starkt till upplevelsen av att jobba på
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
