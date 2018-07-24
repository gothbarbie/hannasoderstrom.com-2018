import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../components/Layout/Wrapper'
import H1 from '../../components/Typography/H1'
import P from '../../components/Typography/P'
import Icon from '../../components/Icon'

import imgHanna from '../../images/hanna2018.jpg'

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10%;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const SecondColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media (min-width: 700px) {
    padding: 10rem 0 0 0;
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  height: auto;
  width: 50%;
  align-self: center;
  margin: 2rem 0;
`

const Contact = () => (
  <Wrapper column>
    <Grid>
      <FirstColumn>
        <H1>Contact</H1>
        <P>
          If you want to get in touch with me, you can send me an email or
          contact me via social media.
        </P>
        <Avatar alt="Hanna" src={imgHanna} />
      </FirstColumn>
      <SecondColumn>
        <a href="mailto:info@hannasoderstrom.com">
          <Icon color="#BDBDBD" name="envelope" pulseAnimation size="3" />
        </a>
        <a href="https://github.com/gothbarbie/hannasoderstrom.com-2018">
          <Icon color="#BDBDBD" isBrand name="github" pulseAnimation size="3" />
        </a>
        <a href="https://www.linkedin.com/in/hannasoderstromwebdev/">
          <Icon
            color="#BDBDBD"
            isBrand
            name="linkedin"
            pulseAnimation
            size="3"
          />
        </a>
        <a href="https://medium.com/@gothbarbie84">
          <Icon color="#BDBDBD" isBrand name="medium" pulseAnimation size="3" />
        </a>
      </SecondColumn>
    </Grid>
  </Wrapper>
)

export default Contact
