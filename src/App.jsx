import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>

      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      {/* <h1 className='text-3xl font-extrabold bg-orange-200 p-4'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      

    </>
  )
}

export default App
