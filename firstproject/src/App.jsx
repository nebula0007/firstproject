import { useState } from 'react'
import './App.css'
import CharacterCounter from './container/CharacterCounter'


function App() {
  const [data, setCount] = useState("hello")
  const [isOn, setIsOn] = useState(false);

  function toggleButton()
  {
    setIsOn(!isOn)
  }
  function fun()
  {
    setCount("bye")
  }

  return (
    <>
      <h1>State of variable</h1>
      <h1>{data}</h1>
      <button onClick={fun}>Change Text</button>
      <h1>Toggle Button</h1>
      <h3>Status: {isOn ? "ON" : "OFF"}</h3>
      <button onClick={toggleButton}>{isOn ? "Turn OFF" : "Turn ON"}</button>
      
      <CharacterCounter />
    </>
  )
}

export default App;