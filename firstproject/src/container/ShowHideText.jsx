import { useState } from 'react'

function ShowHideText() {
  const [visible, setVisible] = useState(true);

  const toggleText = () => {
    setVisible(!visible);
  };

  return (
    <div>
        <h1>Show/Hide Text</h1>
      <button onClick={toggleText}>
        {visible ? "Hide Text" : "Show Text"}
      </button>

      {visible && <p>This is the text</p>}
    </div>
  );
}

export default ShowHideText;