

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import LoginForm from './pages/LoginForm'

import RegisterForm from './pages/RegisterForm'

import TableL from './pages/TableL'





function App() {
  
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterForm/>}/>
      <Route  path="/Login/:id" element={<LoginForm />} />
      <Route path="/home" element={<TableL></TableL>}></Route>
      
      
    </Routes>
    
  </BrowserRouter>
         
  )
}

export default App


