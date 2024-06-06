import React from 'react'

const Title = ({text, className}) => {
  return (
    <h1 className = {`text-2xl font-bold ${className}`}>
        {text}
    </h1>
  )
}

export default Title