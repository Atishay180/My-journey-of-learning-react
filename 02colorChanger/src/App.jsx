import { useState } from 'react'
import './App.css'

function App() {

  let [color, setColor] = useState('purple')
  return (
    <>
    <h1 style={{fontSize: "70px"}}>Color Changer</h1>
    
      <div style={{backgroundColor: color}} className="container">
        <button onClick={() => setColor('red')} style={{backgroundColor: "red"}} className="btn">Red</button>
        <button onClick={() => setColor('green')} style={{backgroundColor: "green"}} className="btn">Green</button>
        <button onClick={() => setColor('blue')} style={{backgroundColor: "blue"}} className="btn">Blue</button>
        <button onClick={() => setColor('yellow')} style={{backgroundColor: "yellow", color: "black"}} className="btn">Yellow</button> 
        <button onClick={() => setColor('pink')} style={{backgroundColor: "pink"}} className="btn">Pink</button>
        <button onClick={() => setColor('olive')} style={{backgroundColor: "olive"}} className="btn">Olive</button>
        <button onClick={() => setColor('cyan')} style={{backgroundColor: "cyan", color: "black"}} className="btn">Cyan</button>
        <button onClick={() => setColor('black')} style={{backgroundColor: "black"}} className="btn">Black</button>
      </div>
    </>
  )
}

export default App
