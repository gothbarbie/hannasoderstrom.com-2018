import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainHeader from './components/Layout/MainHeader'
import MainFooter from './components/Layout/MainFooter'

import Home from './views/Home'
import Recently from './views/Recently'
import Experience from './views/Experience'
import Contact from './views/Contact'

const App = () => (
  <Router>
    <div>
      <MainHeader />
      <Route component={Home} exact path="/" />
      <Route component={Recently} exact path="/recently" />
      <Route component={Experience} exact path="/experience" />
      <Route component={Contact} exact path="/contact" />
      <MainFooter />
    </div>
  </Router>
)

export default App
