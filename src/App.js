import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import ScrollToTop from './components/ScrollToTop'
import MainHeader from './components/Layout/MainHeader'
import Error from './components/Error'
import MainFooter from './components/Layout/MainFooter'

import asyncComponent from './components/AsyncComponent/AsyncComponent'

const Home = asyncComponent(() => import('./views/Home'))
const Recently = asyncComponent(() => import('./views/Recently'))
const RecentlyArticle = asyncComponent(() => import('./views/Recently/Article'))
const Experience = asyncComponent(() => import('./views/Experience'))
const Contact = asyncComponent(() => import('./views/Contact'))
const NotFound404 = asyncComponent(() =>
  import('./views/NotFound404/NotFound404')
)

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  display: block;
  flex: 1;
`

const App = () => (
  <Router>
    <AppWrapper>
      <ScrollToTop>
        <MainHeader />
        <Main>
          <Route component={Home} exact path="/" />
          <Route component={Recently} exact path="/recently" />
          <Route component={RecentlyArticle} path="/recently/:title" />
          <Route component={Experience} exact path="/experience" />
          <Route component={Contact} exact path="/contact" />
          <Route component={NotFound404} path="/not-found" />
          <Error />
        </Main>
        <MainFooter />
      </ScrollToTop>
    </AppWrapper>
  </Router>
)

export default App
