import { useState } from 'react'

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  const styles = {
    backgroundColor: dark ? "#121212" : "#ffffff",
    color: dark ? "#ffffff" : "#000000",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px"
  };

  return (
    <div style={styles}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;