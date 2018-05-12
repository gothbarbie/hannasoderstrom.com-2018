import React from 'react'
import styled from 'styled-components'

import Small from '../../components/Small'
import Paragraph from '../../components/Paragraph'

const WrapperSmall = styled.section`
  max-width: 600px;
  margin: 5% auto;
  padding: 0 2rem;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  background: #efefef;
  min-height: 300px;
  margin-bottom: 2rem;
`

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

const Article = () => (
  <WrapperSmall>
    <div>
      <Img />
      <H1>The title</H1>
      <Small>April 21, 2018</Small>
      <Paragraph>
        I try to re-do my portfolio from time to time. It’s a good project for
        trying out new technologies, if nothing else. It also means that I get
        to improve my design skills, since I don’t do much designing now a days
        (focusing mostly on development).
      </Paragraph>
      <Paragraph>
        This time I’m using the static website generator GatsbyJS and the
        content is rendered with React, while the data is fetched from
        Markdown-files. That means that to generate new content, I simply have
        to add a new markdown-file, write some content and then push the
        updates.
      </Paragraph>
    </div>
  </WrapperSmall>
)

export default Article
