import { useState } from 'react'

function LiveInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Live Input Display</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />

      <h2>{text}</h2>
    </div>
  );
}

export default LiveInput;