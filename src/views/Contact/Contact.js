import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../components/Layout/Wrapper'
import MainHeader from '../../components/Layout/MainHeader'
import MainFooter from '../../components/Layout/MainFooter'
import H1 from '../../components/Typography/H1'
import P from '../../components/Typography/P'

import imgHanna from '../../images/hanna2018.jpg'

const H1WithMargin = styled(H1)`
  font-size: 3rem;
  margin-bottom: 4.25vw;
  font-weight: 100;
`

const ContactWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (min-width: 620px) {
    flex-direction: row;
    justify-content: space-between;
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

const Avatar = styled.img`
  border-radius: 50%;
  height: auto;
  width: 30%;
  min-width: 300px;
  align-self: center;
  margin: 2rem 0;
`

const Contact = () => (
  <React.Fragment>
    <MainHeader darkColor />
    <ContactWrapper maxWidth="970px">
      <FirstColumn>
        <H1WithMargin>Contact</H1WithMargin>
        <P>The best way to reach me is via email.</P>
        <P>
          <a href="mailto:contact@hannasoderstrom.com">
            contact@hannasoderstrom.com
          </a>
        </P>
      </FirstColumn>

      <Avatar alt="Hanna" src={imgHanna} />
    </ContactWrapper>
    <MainFooter />
  </React.Fragment>
)

export default Contact
