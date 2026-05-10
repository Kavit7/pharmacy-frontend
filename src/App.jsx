import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import './App.css'
import Landing from './Page/Landing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <BrowserRouter>
         <Routes>
             <Route path='/' element={<Landing/>}/>



         </Routes>
             
         </BrowserRouter>


   
    </>
  )
}

export default App
