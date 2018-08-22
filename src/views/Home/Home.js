import * as React from 'react'
import styled from 'styled-components'

import Header from '../../components/Layout/MainHeader'
import Footer from '../../components/Layout/MainFooter'
import Wrapper from '../../components/Layout/Wrapper'

import imgComputer400 from '../../images/bg/computer_400.jpg'
import imgComputer1000 from '../../images/bg/computer_1000.jpg'
import imgComputer1500 from '../../images/bg/computer_1500.jpg'
import imgHanna from '../../images/hanna2018.jpg'
import imgHanna300 from '../../images/hanna2018-300.jpg'
import imgKristina from '../../images/kristina.jpg'
import imgRebecca from '../../images/rebecca.jpg'

import A from '../../components/Typography/A'
import H2 from '../../components/Typography/H2'
import H3 from '../../components/Typography/H3'
import P from '../../components/Typography/P'

const Hero = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  transform-style: inherit;
  background-image: url(${imgComputer400});

  @media (min-width: 550px) {
    background-image: url(${imgComputer1000});
  }

  @media (min-width: 1200px) {
    background-image: url(${imgComputer1500});
  }
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 940px;
  height: 100vh;
  min-height: 450px;
  padding: 0 4vw;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const H1 = styled.h1`
  text-align: right;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 3rem;
  line-height: 2rem;
  margin-top: 15vh;

  & span {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  @media (min-width: 500px) {
    font-size: 3.2rem;
    line-height: 3.2rem;

    & span {
      font-size: 1.75rem;
      line-height: 1.75rem;
    }
  }

  @media (min-width: 550px) {
    font-size: 3.5rem;
    line-height: 3.5rem;

    & span {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  @media (min-width: 600px) {
    font-size: 3.75rem;
    line-height: 3.75rem;

    & span {
      font-size: 2.2rem;
      line-height: 2.2rem;
    }
  }

  @media (min-width: 850px) {
    font-size: 4rem;
    line-height: 4rem;

    & span {
      font-size: 2.25rem;
      line-height: 2.25rem;
    }
  }

  @media (min-width: 900px) {
    font-size: 4.25rem;
    line-height: 4.25rem;
    margin-top: 0;

    & span {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }

  @media (min-width: 950px) {
    font-size: 4.5rem;
    line-height: 4.5rem;

    & span {
      font-size: 2.75rem;
      line-height: 2.75rem;
    }
  }
`

const H3Home = styled(H3)`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`

const Avatar = styled.div`
  background-image: url(${imgHanna300});
  background-size: cover;
  border-radius: 50%;
  width: 200px;
  height: 200px;

  @media (min-width: 950px) {
    width: 225px;
    height: 225px;
  }

  @media (min-width: 1600px) {
    max-width: 100%;
    background-image: url(${imgHanna});
  }
`

const SmallAvatar = styled.img`
  border-radius: 50%;
  width: 50%;
  height: auto;
`

const Quotes = styled.section`
  background: #f7f7f7;
  border-left: 7px solid #ee307f;
  display: grid;
  justify-content: center;
  padding: 10% 5%;
  grid-template-columns: 1fr;
  grid-column-gap: 6%;
  grid-row-gap: 3rem;

  @media (min-width: 700px) {
    padding: 5%;
    grid-template-columns: 1fr 1fr;
  }
`

const Quoter = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Quote = styled(P)`
  margin: 2rem 0;
`

const Name = styled.p`
  font-size: 0.9rem;
  line-height: 1.4rem;
  text-align: center;
`

const AboutMe = styled(Wrapper)`
  margin: 6vw auto;
`

const Home = () => (
  <React.Fragment>
    <Header absolute />
    <section>
      <Hero>
        <HeroWrapper>
          <Avatar />
          <H1 data-test="title">
            Hanna Söderström
            <br />
            <span>&lt;Web Developer /&gt;</span>
          </H1>
        </HeroWrapper>
      </Hero>

      <Quotes>
        <Quoter>
          <SmallAvatar alt="Kristina Herngren" src={imgKristina} />
          <Quote>
            <em>
              &quot;I have worked with Hanna in groups developing business
              culture and structure. Hanna is keen and responsive, smart and
              engaged and her presence strongly contributes to the experience of
              working at Iteam.&quot;
            </em>
          </Quote>
          <Name>
            Kristina Herngren
            <br />
            Agency Director at Iteam Solutions AB
          </Name>
        </Quoter>
        <Quoter>
          <SmallAvatar alt="Rebecca Norén" src={imgRebecca} />
          <Quote>
            <em>
              &quot;In my role as an UX designer I have worked in several
              projects together with Hanna. I have appreciated working together
              with Hanna, she is keen, pays attention to details and she is
              solution-oriented. She has great engagement when solving problems
              and she works actively to better cooperation between different
              roles in the teams. She is a fantastic colleague and she has great
              potential. I give her my greatest recommendations in her future
              endeavors.&quot;
            </em>
          </Quote>
          <Name>
            Rebecca Norén
            <br />
            UX Designer at Iteam Solutions AB
          </Name>
        </Quoter>
      </Quotes>

      <AboutMe column>
        <H2>About me</H2>
        <P>
          My journey on the web began in the mid 90’s when my dad brought our
          first computer home. I remember the total awe I experienced when I
          realised how many creative things you could do with it! You could draw
          (pixel by pixel), make simple computer games and eventually a friend’s
          dad bought a digital camera and we made a first person adventure game
          by taking photos and you would navigate from scene to scene by
          clicking different areas of the picture.
        </P>
        <P>
          I came across Adobe Photoshop and my imagination went wild. It didn’t
          take long before I wanted to make my own website. I wrote novels, I
          made digital graphics, I took pictures and a website was the obvious
          place to show those things off to the world. So I began my early days
          in web development with WYSIWYG-tools (What-you-see-is-what-you-get)
          like Front Page 2000 and later on Macromedia Dreamweaver (later bought
          up by Adobe).
        </P>
        <P>
          Gradually I learned XHTML and CSS and to copy-paste simple JavaScript
          snippets. Time passed by, I percieved programming to be some sort of
          mathematical wizardry that was way beyond my reach so I stayed focused
          on Photoshop, photo manipulation, retouching, designing web sites but
          only doing the HTML/CSS parts, while using WordPress themes to bend
          into shape with pure will and a lot of frustration (from helpful
          friends).
        </P>
        <P>
          Eventually I started to get a grasp on PHP but still, that programming
          stuff seemed too hard. Or was it? I found really good tutorials on
          YouTube and gradually I learned more and more. At some point I decided
          I needed to try it out for real, so hesitant but curious I applied to
          university to study two years of Web Development. It was so much fun!
        </P>
        <P>
          Since then I have been working as a web developer. I started out with
          PHP but lately I have spent almost all my time in JavaScript building
          Single Page Applications with React and mobile apps with React Native
          for projects with tens of thousands of users.
        </P>
        <H3Home>What drives me (or why I go to work)</H3Home>
        <P>
          To me, web development is about solving practial problems by building
          tools for users, i.e. “real people” and having fun. Nothing is worth
          it in the long run, if you can’t have fun while doing it, right?
        </P>
        <P>
          I’m not particularly set in my views of how to solve problems and
          overcome obstacles. Programming languages and frameworks change over
          time, especially in web development, and while being a nerd for
          technical stuff, the fun to me is not only in the technical aspects of
          development, but in the shared experience and the intellectual gains
          from working with really talented and smart people in this
          achievement, towards a common goal.
        </P>
        <P>
          I love learning new things, be it group-psychology to help a team work
          better together, a new way of organising components in UI design, or
          learning about different aspects of databases and why you should pick
          <em>Redis</em> in one case or perhaps <em>Postgres</em> in another.
        </P>
        <P>
          I have a wide experience and I’m not an expert in any one single
          field. I’m a web designer gone web developer, mostly focused on
          frontend but I can put up an API (REST or GraphQL) and build
          authentication with Express, Passport and JWT if needed. My main
          contribution though, I would say, is providing alternative point of
          views with my sometimes unorthordox thinking and curiosity for almost
          everything I engage myself to. I also care for the people I work with
          and people seem to confide in me, be it strangers on the bus or
          colleages. My background of not always being a programmer and
          enthusiasm for teaching, means I’m able to translate “tech speech” to
          “normal people”, like clients and business people.
        </P>
        <P>
          People have told me they appreciate me for my honesty and openness, my
          enthusiasm and energy and the way I provide a different point of view
          in discussions.
        </P>
        <P>
          Want more specific examples and details?{' '}
          <A to="/work">Check out my work</A>.
        </P>
      </AboutMe>
    </section>
    <Footer />
  </React.Fragment>
)

export default Home
