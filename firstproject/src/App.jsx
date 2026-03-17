import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name="Ishant";
  const greet="Hello Everyone";
  let x=10;
  let y=20;
function fun()
{
  return "inside fun function";
}
function myname()
{
  return "I am Ishant";
}

function sum(a,b)
{
  return a+b;
}

function calc(a, b, op) {
  if (op === '+') {
    return a + b;
  } else if (op === '-') {
    return a - b;
  } else {
    return a * b;
  }
}
  return(
    
    <div>
  <h1>project run</h1>
  <h3>Value of variable {name}</h3>
  <h3>Value of variable {greet}</h3>
  <h3>10+20={x+y}</h3>
  <h1>Use of function in jsx</h1>
  <h3>example of simple function {fun()}</h3>
  <h2>{myname()}</h2>
  <h3>exam of paramiterize function {sum(60,90)}</h3>
  <h3>{calc(7,8,"+")}</h3>
  <h3>{calc(7,8,"-")}</h3>
  <h3>{calc(7,8)}</h3>
  </div>
  )
}


export default App
