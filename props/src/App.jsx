import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <h1 className="bg-red-300 rounded-lg p-2 mb-10">Props in React</h1>
      <Cards cardtitle = "Atishay"/>
      <Cards cardtitle = "Atul"/>
    </>
  )
}

export default App
