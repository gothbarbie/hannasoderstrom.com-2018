import styled from 'styled-components'

const P = styled.p`
  margin: 0 0 1rem 0;
  font-weight: 200;
  color: #333;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    margin: 0 0 2rem;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  @media (min-width: 1040px) {
    margin: 0 0 2rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export default P
