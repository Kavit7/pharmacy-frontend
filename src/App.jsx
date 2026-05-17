import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'

import './App.css'
import Landing from './Page/Landing'
import Registration from './Page/Registration'
import AdminForm from './Page/AdminForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <BrowserRouter>
         <Routes>
             <Route path='/' element={<Landing/>}/>
             <Route path='/registration' element={<Registration/>}/>
             <Route path='/admin' element={<AdminForm/>}/>



         </Routes>
             
         </BrowserRouter>


   
    </>
  )
}

export default App
