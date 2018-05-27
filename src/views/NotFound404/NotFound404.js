import React from 'react'
import { Link } from 'react-router-dom'

import Wrapper from '../../components/Layout/Wrapper'
import H1 from '../../components/H1'
import Paragraph from '../../components/Paragraph'

const NotFound404 = () => (
  <Wrapper column>
    <H1>Not Found</H1>
    <Paragraph>We could not find what you were looking for.</Paragraph>
    <Paragraph>
      <Link to="/">← Back to Home Page</Link>
    </Paragraph>
  </Wrapper>
)

export default NotFound404
