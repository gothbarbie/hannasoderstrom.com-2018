import styled from 'styled-components'
import { Link } from 'react-router-dom'

const A = styled(Link)`
  color: #ee307f;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export default A
