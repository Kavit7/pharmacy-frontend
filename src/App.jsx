import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'

import './App.css'
import Landing from './Page/Landing'
import Registration from './Page/Registration'
import AdminForm from './Page/AdminForm'
import MainLayout from './Layout/MainLayout'
import Dashboard from './Page/Dashboard'
import Login from './Page/Login'
import ProtectedRoute from './routes/ProtectedRoute'
import Medicine from './Page/Medicine'
function App() {
 

  return (
    <>
         <BrowserRouter>
         <Routes>
             <Route path='/' element={<Landing/>}/>
             <Route path='/registration' element={<Registration/>}/>
             <Route path='/admin' element={<AdminForm/>}/>
             <Route path='/dashboard' 
             element={
              <ProtectedRoute>
              <MainLayout>
              <Dashboard/>
             </MainLayout>

              </ProtectedRoute>
             
             
            }/>
            <Route path='/medicine' element={
              <ProtectedRoute>
                <MainLayout>
                  <Medicine/>
                </MainLayout>
              </ProtectedRoute>
            }/>
             <Route path='/login' element={<Login/>}/>
         </Routes>
             
         </BrowserRouter>


   
    </>
  )
}

export default App
