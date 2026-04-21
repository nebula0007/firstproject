import { useState } from 'react'

function CharacterCounter() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="container">
      <h1>Character Counter</h1>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Characters typed: {inputText.length}</p>
    </div>
  )
}

export default CharacterCounter;
