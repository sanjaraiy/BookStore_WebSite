import {Routes,Route,Navigate} from 'react-router-dom'

import Course from './pages/Course'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'


function App() {
 
  return (
    <div className='dark:bg-slate-800'>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
         <Route path='/course' element={<Course></Course>}></Route>
         <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
