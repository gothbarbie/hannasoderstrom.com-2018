import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1040px')};
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 4%;
  position: relative;
`

export default Wrapper
