import React from 'react'
import './style.sass'

const Section = ({ children }) =>
  <div className='section'>
    <div className='section__container'>
      {children}
    </div>
  </div>

export default Section
