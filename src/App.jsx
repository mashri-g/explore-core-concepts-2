import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './user';
import Friends from './friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }
const handleClick2 = () =>{
  alert('button 2 clicked')
}
const addToFive = (num) =>{
  alert(num + 5);
}
  return (
    <>
      
      <h1>Vite + React</h1>
      
<Team></Team>
<Friends></Friends>
<Users></Users>

      <Counter></Counter>
      { /*       <button onClick={handleClick}>Click me</button>    
   */ }
        <button onClick={handleClick}>Click me</button>    
<button onClick={handleClick2}>Click2</button>
<button onClick={() => {alert('third clicked')}}>Third </button>
<button onClick={() =>addToFive(3)}>Four</button>
    </>
  )
}

export default App
