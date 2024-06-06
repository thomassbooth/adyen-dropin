import React from 'react'

const Subtitle = ({text, className}) => {
  return (
    <h2 className = {`text-xl font-semibold ${className}`}>
        {text}
    </h2>
  )
}

export default Subtitle