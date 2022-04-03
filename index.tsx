import React from 'react'
import ReactDOM from 'react-dom'
import sample from 'sample.js'

const App = () => (
  <>
    <h1>Hello World!</h1>
    <p>{sample()}</p>
  </>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
