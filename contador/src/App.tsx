import { useState } from 'react'

import './App.css'
import ButtonClick from "./components/button/ButtonClick.tsx";

function App() {
  const [sum, setSum] = useState(0)

  const handleSum = () => {
    setSum(sum + 1)
  }

  return (
      <>
        <h1>Counter of clicks</h1>
        <p> {sum} </p>
        <ButtonClick handleSum={handleSum}/>
        <ButtonClick handleSum={handleSum}/>
      </>
  )
}

export default App
