import React from 'react'
import './custom-input.css'

const CustomInput = ({ ...otherProps }) => {
  return (
    <input className="custom-input"{...otherProps} />
  )
}

export default CustomInput
