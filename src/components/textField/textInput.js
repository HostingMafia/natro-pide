import React from 'react'

const TextInput = props => {
  return (
    <div>
      <label>{props.label}: </label>
      <input {...props} type="text" />
    </div>
  )
}

export default TextInput