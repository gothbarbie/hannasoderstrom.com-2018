import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import configureStore from './store/configureStore'

import App from './App'

import registerServiceWorker from './registerServiceWorker'

const store = configureStore() // initial state can be passed here


render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

registerServiceWorker()
