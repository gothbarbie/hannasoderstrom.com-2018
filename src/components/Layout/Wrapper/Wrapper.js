import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1140px;
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 4%;
  flex-wrap: wrap;
  position: relative;

  @media (min-width: 540px) {
    justify-content: space-between;
  }
`

export default Wrapper
