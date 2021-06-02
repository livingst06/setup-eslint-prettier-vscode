import React, { useState, useEffect } from 'react'

import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setCount((p) => p + 1), 1000)
    return () => window.clearInterval(timer)
  }, [])
  return <div>{count}</div>
}

export default App
