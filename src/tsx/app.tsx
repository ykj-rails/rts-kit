import React from 'react'
import ReactDom from 'react-dom'

const Hello = () => {
  return (
    <>
      <h2>Hello React</h2>
    </>
  )
}

ReactDom.render(<Hello />, document.getElementById('root'))
