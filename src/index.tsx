import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

console.log('aaa')

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
