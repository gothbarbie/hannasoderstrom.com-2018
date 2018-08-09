import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../components/Layout/Wrapper'
import MainHeader from '../../components/Layout/MainHeader'
import MainFooter from '../../components/Layout/MainFooter'
import H1 from '../../components/Typography/H1'
import P from '../../components/Typography/P'
import Icon from '../../components/Icon'

import imgHanna from '../../images/hanna2018.jpg'

const H1WithMargin = styled(H1)`
  font-size: 3rem;
  margin-bottom: 4.25rem;
  font-weight: 100;
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10%;
  margin: 5rem 0;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & a {
    color: #ee307f;
  }
`

const SecondColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: auto;
  width: 60%;
  align-self: center;
  margin: 2rem 0;
`

const Contact = () => (
  <React.Fragment>
    <MainHeader darkColor />
    <Wrapper column maxWidth="970px">
      <Grid>
        <FirstColumn>
          <H1WithMargin>Contact</H1WithMargin>
          <P>The best way to reach me is via email.</P>
          <P>
            <a href="mailto:contact@hannasoderstrom.com">
              contact@hannasoderstrom.com
            </a>
          </P>
        </FirstColumn>
        <SecondColumn>
          <Avatar alt="Hanna" src={imgHanna} />
        </SecondColumn>
      </Grid>
    </Wrapper>
    <MainFooter />
  </React.Fragment>
)

export default Contact
