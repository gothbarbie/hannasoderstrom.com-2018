import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { mount, shallow } from 'enzyme'
import ScrollToTop from './index'

describe('components/ScrollToTop', () => {
  let component

  it('renders', () => {
    component = mount(
      <Router>
        <Route>
          <ScrollToTop>
            <div>Test</div>
          </ScrollToTop>
        </Route>
      </Router>
    )
    expect(component).toMatchSnapshot()
  })
})
