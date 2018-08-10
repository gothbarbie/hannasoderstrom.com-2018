import React from 'react'
import styled from 'styled-components'

import Header from '../../components/Layout/MainHeader'
import Footer from '../../components/Layout/MainFooter'

import imgIteam from '../../images/logos/iteam.png'
import imgWidespace from '../../images/logos/widespace.png'
import imgHannaSoderstrom from '../../images/logos/hannasoderstrom.png'

import imgJS from '../../images/logos/js.svg'
import imgReact from '../../images/logos/react.png'
import imgReactNative from '../../images/logos/reactnative.png'
import imgVue from '../../images/logos/vue.svg'
import imgNode from '../../images/logos/node.png'
import imgWebpack from '../../images/logos/webpack.png'
import imgTaxiSthlm from '../../images/logos/taxisthlm.png'
import imgMSF from '../../images/logos/msf.png'
import imgVimla from '../../images/logos/vimla.png'
import imgHTML5 from '../../images/logos/html5.svg'
import imgCSS3 from '../../images/logos/css3.svg'
import imgPS from '../../images/logos/ps.png'
import imgPR from '../../images/logos/pr.png'
import imgPHP from '../../images/logos/php.png'
import imgCocaCola from '../../images/logos/cocacola.png'
import imgPepsi from '../../images/logos/pepsi.png'
import imgMercedes from '../../images/logos/mercedes.png'
import imgCaptainMorgan from '../../images/logos/captainmorgan.jpg'
import imgGoT from '../../images/logos/got.png'
import imgBBC from '../../images/logos/bbc.png'
import imgReuters from '../../images/logos/reuters.png'
import imgAdidas from '../../images/logos/adidas.png'
import imgBurgerKing from '../../images/logos/burgerking.png'
import imgMcDonalds from '../../images/logos/mcdonalds.png'
import imgCK from '../../images/logos/ck.png'
import imgHaS from '../../images/logos/headandshoulders.png'
import imgWordPress from '../../images/logos/wordpress.svg'

import imgStarfucked from '../../images/websites/starfucked.png'
import imgChrisPoland from '../../images/websites/chrispoland.png'
import imgBillyLundevall from '../../images/websites/billylundevall.png'
import imgRDE from '../../images/websites/rde.png'
import imgDanielKopp from '../../images/websites/danielkopp.png'

import Wrapper from '../../components/Layout/Wrapper'
import Small from '../../components/Typography/Small'
import P from '../../components/Typography/P'
import Image from '../../components/Image'
import Tag from '../../components/Tag'
import H3 from '../../components/Typography/H3'

const WorkPlace = styled.article`
  width: 100%;
  padding: 2rem 0;

  &:first-of-type {
    margin-top: 3rem;
  }
`
const Main = styled.main`
  display: block;
  padding: 3rem 0;

  p:first-of-type {
    margin-top: 0;
  }
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

const CompanyLogo = styled(Image)`
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
`

const Role = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #333;
  margin-top: 1.5rem;
  line-height: 1.25;
`

const Website = styled.article`
  margin: 4vw 0;

  header {
    padding-bottom: 1rem;
  }

  footer {
    display: flex;
    flex-wrap: wrap;

    & span {
      margin: 0.25rem;
    }
  }
`

const Experience = () => (
  <React.Fragment>
    <Header darkColor />
    <Wrapper column>
      <WorkPlace>
        <header>
          <CompanyLogo alt="Iteam" maxWidth="365px" src={imgIteam} />
          <Role>Frontend Developer</Role>
          <Small>August 2016 - August 2018</Small>
        </header>
        <Main>
          <P>
            Culture, value and fun is the keywords for Iteam, where I worked as
            a Web Developer. We worked in an agile manner, in self-organizing
            teams and in close relationship with our clients, to bring them
            value. Not only with technology, but with culture as well. Our core
            values - to produce value, to have fun and to do good - influenced
            not only our daily work, but the clients we took on, the projects we
            choose to be a part of and therefore also the dedication and
            eagerness with which we produced really great results for a wide
            range of businesses.
          </P>
          <P>
            My roles was primarily focused on frontend development, using
            technologies such as:
          </P>
          <Logos>
            <Logo alt="JavaScript" maxWidth="60" src={imgJS} />
            <Logo alt="React" maxWidth="110" src={imgReact} />
            <Logo alt="React Native" maxWidth="180" src={imgReactNative} />
            <Logo alt="Vue" maxWidth="50" src={imgVue} />
            <Logo alt="NodeJS" maxWidth="120" src={imgNode} />
            <Logo alt="Webpack" maxWidth="210" src={imgWebpack} />
          </Logos>
          <P>
            I grew in skill a great deal during the last year through my daily
            and continuous work with cutting edge technologies, working with
            really experienced and talented people in all areas of web
            development.
          </P>
          <Logos>
            <Logo alt="Taxi Stockholm" maxWidth="120" src={imgTaxiSthlm} />
            <Logo alt="Doctors Without Borders" maxWidth="200" src={imgMSF} />
            <Logo alt="Vimla" maxWidth="170" src={imgVimla} />
          </Logos>
        </Main>
      </WorkPlace>
      <WorkPlace>
        <header>
          <CompanyLogo alt="Widespace" maxWidth="480px" src={imgWidespace} />
          <Role>Web Designer &amp; Developer</Role>
          <Small>February 2015 - August 2016</Small>
        </header>
        <Main>
          <P>
            Widespace provides a platform for mobile advertising all over
            Europe, connecting publishers with advertisers.
          </P>
          <P>
            I worked in the Studio team, a group with a wide range of skills
            doing everything from producing ads and new creative mobile ad
            formats to optimizing ads from other medias for the mobile platform.
          </P>
          <P>
            We worked daily with very short deadlines, 100% performance
            accountability and served the greatest brands there is, our ads
            shown to millions of people daily and on the most saught after
            ad-spots. We focused not only on making ads seen but also to be
            engaging and fun with all the tools and sensors of modern mobile
            phones at our disposal.
          </P>
          <P>
            Since the mobile web depends on small sized content, we used mainly
            vanilla JavaScript with few additional tools unless we could build
            them ourselves.
          </P>
          <Logos>
            <Logo alt="JavaScript" maxWidth="70" src={imgJS} />
            <Logo alt="HTML5" maxWidth="95" src={imgHTML5} />
            <Logo alt="CSS3" maxWidth="70" src={imgCSS3} />
            <Logo alt="Photoshop" maxWidth="70" src={imgPS} />
            <Logo alt="Premiere" maxWidth="70" src={imgPR} />
            <Logo alt="PHP" maxWidth="150" src={imgPHP} />
          </Logos>
          <P>
            We worked with hundreds of famous brands. These are just the ones at
            the top of my head:
          </P>
          <Logos>
            <Logo alt="CocaCola" maxWidth="140" src={imgCocaCola} />
            <Logo alt="Pepsi" maxWidth="120" src={imgPepsi} />
            <Logo alt="Mercedes-Benz" maxWidth="160" src={imgMercedes} />
            <Logo alt="CaptainMorgan" maxWidth="100" src={imgCaptainMorgan} />
            <Logo alt="GameOfThrones" maxWidth="150" src={imgGoT} />
            <Logo alt="BBC" maxWidth="120" src={imgBBC} />
            <Logo alt="Reuters" maxWidth="150" src={imgReuters} />
            <Logo alt="Adidas" maxWidth="110" src={imgAdidas} />
            <Logo alt="BurgerKing" maxWidth="100" src={imgBurgerKing} />
            <Logo alt="McDonalds" maxWidth="120" src={imgMcDonalds} />
            <Logo alt="CK" maxWidth="120" src={imgCK} />
            <Logo alt="Head and Shoulders" maxWidth="130" src={imgHaS} />
          </Logos>
        </Main>
      </WorkPlace>
      <WorkPlace>
        <header>
          <CompanyLogo
            alt="Hanna Söderström"
            maxWidth="400px"
            src={imgHannaSoderstrom}
          />
          <Role>Web Designer &amp; Developer</Role>
          <Small>January 2012 - February 2015</Small>
        </header>
        <Main>
          <P>
            My history with design and graphics actually goes all the way back
            to when I was twelve and first came in contact with Photoshop
            (version 5 at the time).
          </P>
          <P>
            Even before that I was drawing and writing music, learning to play
            several different instruments (trombone, piano, drums). I come from
            a very creative family and music and artistic creativity has always
            been close to my heart.
          </P>
          <P>
            I started out my career on the web designing websites and gradually
            learning how to adapt and later create my own WordPress-themes from
            scratch.
          </P>
          <Logos>
            <Logo alt="HTML5" maxWidth="95" src={imgHTML5} />
            <Logo alt="CSS3" maxWidth="70" src={imgCSS3} />
            <Logo alt="PHP" maxWidth="150" src={imgPHP} />
            <Logo alt="WordPress" maxWidth="100" src={imgWordPress} />
            <Logo alt="Photoshop" maxWidth="70" src={imgPS} />
          </Logos>
          <P>
            I made a lot of websites for all sort of smaller businesses, models,
            artists and other clients in need of portfolios and similar
            websites.
          </P>
          <P>Here are a few of the more noteworthy:</P>
          <Website>
            <header>
              <H3>
                <strong>Starfucked</strong> | Fetish Model
              </H3>
              <em>Design and building of WordPress Theme</em>
            </header>
            <main>
              <img alt="Starfucked" src={imgStarfucked} width="100%" />
            </main>
            <footer>
              <Tag>2014</Tag>
              <Tag>Design</Tag>
              <Tag>WordPress</Tag>
              <Tag>PHP</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>Responsive</Tag>
            </footer>
          </Website>
          <Website>
            <header>
              <H3>
                <strong>Chris Poland</strong> | Guitar Player, Artist
              </H3>
              <em>
                Design and building of WordPress Theme based on album cover
              </em>
            </header>
            <main>
              <img alt="Chris Poland" src={imgChrisPoland} width="100%" />
            </main>
            <footer>
              <Tag>2012</Tag>
              <Tag>Design</Tag>
              <Tag>WordPress</Tag>
              <Tag>PHP</Tag>
              <Tag>MySQL</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
            </footer>
          </Website>
          <Website>
            <header>
              <H3>
                <strong>Billy Lundevall</strong> | Illustrator, 3D Artist
              </H3>
              <em>Design and building of WordPress Theme</em>
            </header>
            <main>
              <img alt="Billy Lundevall" src={imgBillyLundevall} width="100%" />
            </main>
            <footer>
              <Tag>2013</Tag>
              <Tag>WordPress</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
            </footer>
          </Website>
          <Website>
            <header>
              <H3>
                <strong>rde Connects</strong> | Connectors for advanced
                technical equipment
              </H3>
              <em>
                Design and building of Website and Administration System for
                Searchable Catalog
              </em>
            </header>
            <main>
              <img alt="rde Connects" src={imgRDE} width="100%" />
            </main>
            <footer>
              <Tag>2013</Tag>
              <Tag>2014</Tag>
              <Tag>Design</Tag>
              <Tag>PHP</Tag>
              <Tag>MySQL</Tag>
              <Tag>jQuery</Tag>
              <Tag>GoogleAPI</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
            </footer>
          </Website>
          <Website>
            <header>
              <H3>
                <strong>Daniel Kopp</strong> | 3D/VFX Artist
              </H3>
              <em>Design and building of Website</em>
            </header>
            <main>
              <img alt="Daniel Kopp" src={imgDanielKopp} width="100%" />
            </main>
            <footer>
              <Tag>2013</Tag>
              <Tag>Design</Tag>
              <Tag>WordPress</Tag>
              <Tag>PHP</Tag>
              <Tag>MySQL</Tag>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>Responsive</Tag>
            </footer>
          </Website>
        </Main>
      </WorkPlace>
    </Wrapper>
    <Footer />
  </React.Fragment>
)

export default Experience
