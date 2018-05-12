import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  ${({ maxWidth }) =>
    maxWidth && maxWidth.length && 'max-width: ' + maxWidth + 'px'};
`

export default Image
