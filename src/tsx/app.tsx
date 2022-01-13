import React from 'react'
import ReactDOM from 'react-dom'
import json from '../data/data.json'

const Hello = () => {
  return (
    <>
      <h2>Hello React</h2>
      <p>{json.name}</p>
      <p>{json.age}</p>
    </>
  )
}

ReactDOM.render(<Hello />, document.getElementById('app'))
