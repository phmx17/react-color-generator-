import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(',')
  const hex = rgbToHex(...rgb)
  
  return <article className={`color: ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bgc})`}}>
    {rgb}
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>

  </article>
}

export default SingleColor
