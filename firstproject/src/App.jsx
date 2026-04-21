import { useState } from 'react'
import './App.css'
import CharacterCounter from './container/CharacterCounter'
import CounterApp from './container/CounterApp'
import ShowHideText from './container/ShowHideText'
import LiveInput from './container/LiveInput'
import ThemeToggle from './container/ThemeToggle'
import LikeButton from './container/LikeButton'

function App() {

  return (
    <>
      {/* <CharacterCounter /> */}
      <CounterApp/>
      <ShowHideText/>
      <LiveInput/>
      <ThemeToggle/>
      <LikeButton/>
    </>
  )
}

export default App;