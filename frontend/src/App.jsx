import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'


function App() {


 

  return (
    
    <>
    <BrowserRouter>
    
    <Routes>
    <Route index element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
  
    </Routes>
    
    </BrowserRouter>
   
      
    </>
  )
}

export default App
