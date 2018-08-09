import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import ScrollToTop from './components/ScrollToTop'
import Error from './components/Error'

import asyncComponent from './components/AsyncComponent/AsyncComponent'

const Home = asyncComponent(() => import('./views/Home'))
const News = asyncComponent(() => import('./views/News'))
const NewsArticle = asyncComponent(() => import('./views/News/Article'))
const Work = asyncComponent(() => import('./views/Work'))
const Contact = asyncComponent(() => import('./views/Contact'))
const NotFound404 = asyncComponent(() =>
  import('./views/NotFound404/NotFound404')
)

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const App = () => (
  <Router>
    <AppWrapper>
      <ScrollToTop>
        <Route component={Home} exact path="/" />
        <Route component={News} exact path="/news" />
        <Route component={NewsArticle} path="/news/:title" />
        <Route component={Work} exact path="/work" />
        <Route component={Contact} exact path="/contact" />
        <Route component={NotFound404} path="/not-found" />
        <Error />
      </ScrollToTop>
    </AppWrapper>
  </Router>
)

export default App
