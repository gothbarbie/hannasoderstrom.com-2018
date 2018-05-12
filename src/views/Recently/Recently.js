import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../components/Layout/Wrapper'
import Paragraph from '../../components/Paragraph'

const Grid = styled.section`
  width: 100%;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr;
  grid-column-gap: 5%;
  grid-row-gap: 10%;
  align-items: start;

  & img {
    min-height: 100px;
  }

  .first {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;

    & img {
      min-height: 200px;
    }
  }
`

const Article = styled.article`
  margin: 1rem 0;
`

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  background: #efefef;
`

const Recently = () => (
  <Wrapper>
    <Grid>
      <Article className="first">
        <Img />
        <H2>New portfolio design</H2>
        <Paragraph>
          I try to re-do my portfolio from time to time. It’s a good project for
          trying out new technologies, if nothing else. It also means that I get
          to improve my design skills, since I don’t do much designing now a
          days (focusing mostly on...
        </Paragraph>
      </Article>
      <Article>
        <Img />
        <H2>New portfolio design</H2>
        <p>Introduction text...</p>
      </Article>
      <Article>
        <Img />
        <H2>New portfolio design</H2>
        <p>Introduction text...</p>
      </Article>
      <Article>
        <Img />
        <H2>New portfolio design</H2>
        <p>Introduction text...</p>
      </Article>
      <Article>
        <Img />
        <H2>New portfolio design</H2>
        <p>Introduction text...</p>
      </Article>
      <Article>
        <Img />
        <H2>New portfolio design</H2>
        <p>Introduction text...</p>
      </Article>
      <Article>
        <Img />
        <H2>New portfolio design</H2>
        <p>Introduction text...</p>
      </Article>
    </Grid>
  </Wrapper>
)

export default Recently
