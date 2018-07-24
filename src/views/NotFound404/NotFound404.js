import React from 'react'
import { Link } from 'react-router-dom'

import Wrapper from '../../components/Layout/Wrapper'
import H1 from '../../components/Typography/H1'
import P from '../../components/Typography/P'

const NotFound404 = () => (
  <Wrapper column>
    <H1>Not Found</H1>
    <P>We could not find what you were looking for.</P>
    <P>
      <Link to="/">← Back to Home Page</Link>
    </P>
  </Wrapper>
)

export default NotFound404
