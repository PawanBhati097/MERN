import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Mens from './pages/Mens'
import Women from './pages/Women'

import Kids from './pages/Kids'

import { Routes,Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
           <Route path='/courses/:id' element={<CourseDetail/>} />          {/*dynamic routing */}
        


        <Route path='/product' element={<Product/>}>      
        <Route path='men' element={<Mens/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>
        </Route>
        

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App