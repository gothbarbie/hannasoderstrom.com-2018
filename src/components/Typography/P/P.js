import styled from 'styled-components'

const P = styled.p`
  margin: 1rem 0 2rem;
  font-weight: 200;
  color: #333;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  @media (min-width: 1040px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export default P
