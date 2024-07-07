import {Routes,Route,Navigate} from 'react-router-dom'

import Course from './pages/Course'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
 
  const [authUser,setAuthUser]= useAuth();
  

  return (
    <div className='dark:bg-slate-800'>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
         <Route path='/course' element={ authUser ? <Course></Course> : <Navigate to="/signup"></Navigate> }></Route>
         <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
        <Toaster></Toaster>
      <Footer></Footer>

    </div>
  )
}

export default App
