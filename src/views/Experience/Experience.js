import React from 'react'
import styled from 'styled-components'

import imgIteam from '../../images/iteam.png'
import imgWidespace from '../../images/widespace.png'

import imgJS from '../../images/js.png'
import imgReact from '../../images/react.png'
import imgReactNative from '../../images/reactnative.png'
import imgVue from '../../images/vue.png'
import imgNode from '../../images/node.png'
import imgWebpack from '../../images/webpack.png'
import imgTaxiSthlm from '../../images/taxisthlm.png'
import imgMSF from '../../images/msf.png'
import imgVimla from '../../images/vimla.png'
import imgHTML5 from '../../images/html5.png'
import imgCSS3 from '../../images/css3.png'
import imgPS from '../../images/ps.png'
import imgPR from '../../images/pr.png'
import imgPHP from '../../images/php.png'

import Wrapper from '../../components/Layout/Wrapper'
import Small from '../../components/Small'
import Paragraph from '../../components/Paragraph'
import Image from '../../components/Image'

const Column = styled.section`
  display: flex;
  flex-direction: column;
`
const Article = styled.article`
  width: 100%;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr;
  grid-column-gap: 10%;
  grid-row-gap: 5%;
  align-items: start;
`
const Main = styled.main`
  display: block;
  margin-top: 2rem;
`
const Img = Image.extend`
  width: 80%;
`
const Logos = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const Logo = Image.extend`
  margin: 1rem;
`

const Experience = () => (
  <Wrapper>
    <Column>
      <Article>
        <header>
          <Img alt="Iteam" src={imgIteam} />
          <Small>Aug 2016 - Current</Small>
        </header>
        <Main>
          <Paragraph>
            Culture, value and fun is the keywords for Iteam, where I work as a
            Web Developer. We work in an agile manner, in self-organising teams
            and in close relationship with our clients, to bring them value. Not
            only with technology, but with culture as well. Our core values - to
            produce value, to have fun and to do good - influence not only our
            daily work, but the clients we take on, the projects we choose to be
            a part of and therefore also the dedication and eagerness with which
            we produce really great results for a wide range of businesses.
          </Paragraph>
          <Paragraph>
            My roles has been primarily focused on front end development so far,
            using technologies such as:
          </Paragraph>
          <Logos>
            <Logo alt="JavaScript" maxWidth="60" src={imgJS} />
            <Logo alt="React" maxWidth="110" src={imgReact} />
            <Logo alt="React Native" maxWidth="180" src={imgReactNative} />
            <Logo alt="Vue" maxWidth="50" src={imgVue} />
            <Logo alt="NodeJS" maxWidth="120" src={imgNode} />
            <Logo alt="Webpack" maxWidth="210" src={imgWebpack} />
          </Logos>
          <Paragraph>
            I have grown in skill a great deal during the last year through my
            daily and continuous work with cutting edge technologies, working
            with really experienced and talented people in all areas of web
            development.
          </Paragraph>
          <Logos>
            <Logo alt="Taxi Stockholm" maxWidth="120" src={imgTaxiSthlm} />
            <Logo alt="Doctors Without Borders" maxWidth="200" src={imgMSF} />
            <Logo alt="Vimla" maxWidth="170" src={imgVimla} />
          </Logos>
        </Main>
      </Article>
      <Article>
        <header>
          <Img alt="Widespace" src={imgWidespace} />
          <Small>Feb 2015 - Aug 2016</Small>
        </header>
        <Main>
          <Paragraph>
            Widespace provides a platform for mobile advertising all over
            Europe, connecting publishers with advertisers.
          </Paragraph>
          <Paragraph>
            I worked in the Studio team, a group with a wide range of skills
            doing everything from producing ads and new creative mobile ad
            formats to optimising ads from other medias for the mobile platform.
          </Paragraph>
          <Paragraph>
            We worked daily with very short deadlines, 100% performance
            accountability and served the greatest brands there is, our ads
            shown to millions of people daily and on the most saught after
            ad-spots. We focused not only on making ads seen but also to be
            engaging and fun with all the tools and sensors of modern mobile
            phones at our disposal.
          </Paragraph>
          <Paragraph>
            Since the mobile web depends on small sized content, we used mainly
            vanilla JavaScript with few additional tools unless we could build
            them ourselves.
          </Paragraph>
          <Logos>
            <Logo alt="JavaScript" maxWidth="60" src={imgJS} />
            <Logo alt="HTML5" maxWidth="70" src={imgHTML5} />
            <Logo alt="CSS3" maxWidth="80" src={imgCSS3} />
            <Logo alt="Photoshop" maxWidth="60" src={imgPS} />
            <Logo alt="Premiere" maxWidth="60" src={imgPR} />
            <Logo alt="PHP" maxWidth="150" src={imgPHP} />
          </Logos>
          <Paragraph>
            We worked with hundreds of famous brands. These are just the ones at
            the top of my head.
          </Paragraph>
        </Main>
      </Article>
    </Column>
  </Wrapper>
)

export default Experience
