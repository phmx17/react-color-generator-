import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
const [color, setColor] = useState('')
const [error, setError] = useState(false)
const [list, setList] = useState([])

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('hello');
}

function App() {
  return <>
    <section className="container">
      
    </section>
    <section className="colors" ></section>
  </>
}

export default App
