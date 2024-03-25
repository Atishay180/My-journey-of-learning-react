import { useState } from 'react';
import './App.css'
import ShowValue from './components/ShowValue';

function App() {

  let [value, setValue] = useState("")

  let getvalue = (e) => {
    setValue(value.concat(e.target.value))
  }

  let clear = () => {
    setValue("")
  }

  let clearEntry = () => {
    setValue(value.slice(0, -1))
  }

  let evaluate = () => {
    try {
      if (value === "") return setValue("Please enter something")

      setValue(eval(value).toString())
    }
    catch (error) {
      setValue("error")
    }
  }



  return (
    <>
      <div className="image">
      </div>
      <span id='cover'></span>



      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className="container bg-zinc-950 bg-opacity-90 flex flex-col items-center mx-10 p-4 w-72 rounded-xl">
          <ShowValue value={value} />
          <table>
            <tbody>
              <tr>
                <td><button onClick={clear} value={'C'} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>C</button></td>
                <td><button onClick={getvalue} value={'%'} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>%</button></td>
                <td><button onClick={clearEntry} value={'C'} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>CE</button></td>
                <td><button onClick={getvalue} value={'/'} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>/</button></td>
              </tr>
              <tr>
                <td><button onClick={getvalue} value={7} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>7</button></td>
                <td><button onClick={getvalue} value={8} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>8</button></td>
                <td><button onClick={getvalue} value={9} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>9</button></td>
                <td><button onClick={getvalue} value={'*'} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>*</button></td>
              </tr>
              <tr>
                <td><button onClick={getvalue} value={4} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>4</button></td>
                <td><button onClick={getvalue} value={5} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>5</button></td>
                <td><button onClick={getvalue} value={6} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>6</button></td>
                <td><button onClick={getvalue} value={'-'} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>-</button></td>
              </tr>
              <tr>
                <td><button onClick={getvalue} value={1} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>1</button></td>
                <td><button onClick={getvalue} value={2} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>2</button></td>
                <td><button onClick={getvalue} value={3} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>3</button></td>
                <td><button onClick={getvalue} value={'+'} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>+</button></td>
              </tr>
              <tr>
                <td><button onClick={getvalue} value={"00"} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>00</button></td>
                <td><button onClick={getvalue} value={0} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>0</button></td>
                <td><button onClick={getvalue} value={"."} className='buttons text-white bg-slate-600 flex justify-center items-center text-3xl m-1 p-3 rounded-xl w-14 h-14 hover:bg-slate-500'>.</button></td>
                <td><button onClick={evaluate} value={'='} className='buttons text-white bg-orange-600 flex justify-center items-center text-3xl m-1 p-3 rounded-full w-14 h-14 hover:bg-orange-500'>=</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
