import React from 'react'
import "../styles/Button.scss"

function Button({children}) {
  return (
    <button className='btn'>
        {children}
    </button>
  )
}

export default Button