import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Mock globals
window.fetch = jest.fn()

fetch.mockResponseSuccess = body => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({ json: () => Promise.resolve(body) })
  )
}

fetch.mockResponseSuccessWithError = body => {
  fetch.mockImplementationOnce(() => Promise.resolve(body))
}

fetch.mockResponseFailure = error => {
  fetch.mockImplementationOnce(() => Promise.reject(error))
}
