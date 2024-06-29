import { useState } from "react"

function App() {
  const [input, setInput] = useState("")

  const handleOnClick = (e) => {
    setInput(input.concat(e.target.value));
  }
  console.log(input);

  const handleResult = () => {
    
  }
  

  return (
    <>
      <div className="w-96 border-2 border-black p-1 rounded-xl bg-neutral-800">
        <input className="border-2 border-gray-300 w-full rounded-xl mb-1 p-3 text-2xl bg-zinc-800" type="text" name="" id="" value={() => input} readOnly/>
        <div className="grid grid-cols-3 gap-1">
          <button onClick={handleOnClick} value={9} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">9</button>
          <button onClick={handleOnClick} value={8} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">8</button>
          <button onClick={handleOnClick} value={7} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">7</button>

          <button onClick={handleOnClick} value={6} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">6</button>
          <button onClick={handleOnClick} value={5} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">5</button>
          <button onClick={handleOnClick} value={4} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">4</button>

          <button onClick={handleOnClick} value={3} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">3</button>
          <button onClick={handleOnClick} value={2} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">2</button>
          <button onClick={handleOnClick} value={1} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">1</button>

          <button onClick={handleOnClick} value={'.'} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">.</button>
          <button onClick={handleOnClick} value={0} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">0</button>
          <button onClick={handleResult} value={'='} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">=</button>

          <button onClick={handleOnClick} value={'-'} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">-</button>
          <button onClick={handleOnClick} value={'+'} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">+</button>
          <button onClick={handleOnClick} value={'*'} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">*</button>

          <button onClick={handleOnClick} value={'/'} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">/</button>
          <button onClick={handleOnClick} value={'AC'} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">AC</button>
          <button onClick={handleOnClick} value={'C'} className="border-2 border-black bg-white p-2 rounded-xl text-2xl hover:bg-zinc-200">C</button>

        </div>
      </div>
    </>
  )
}

export default App
