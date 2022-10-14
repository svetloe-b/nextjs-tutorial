import React from 'react'

function TestComponent() {
    const [message, setMessage] = useState("Hello")
  return (
    <div>{message}</div>
  )
}

export default TestComponent