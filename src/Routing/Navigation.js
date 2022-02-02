import React from 'react'
import  { Routes , Link , Switch  , Route }  from 'react-router-dom'

import Home from '../Home'
import MyComponent from '../ClassPage'

import ColorPage from '../Test3'


import MyForm from '../Screens/MyForm'





const Routing  = () =>{





return(

    <Routes>
        <Route path='/home' element={<Home/>} />    
        <Route path='/test' element={<MyComponent/>} />
        <Route path='/colorpage' element={<ColorPage/>} />
        <Route path='/Myform' element={<MyForm/>} />
    </Routes>

)

    
}

export default Routing