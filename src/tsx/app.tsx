import React from 'react'
import ReactDOM from 'react-dom'
import json from '../data/data.json'

const Hello = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>{json.name}</p>
      <p>{json.age}</p>
      <img src="img/pien.png" />
    </>
  )
}

ReactDOM.render(<Hello />, document.getElementById('app'))
