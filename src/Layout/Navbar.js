import React , {useState}from 'react'

import {useLinkClickHandler, useNavigate} from 'react-router-dom'





const Navbar  =  () =>
{

    const [mode  , setMode] = useState('dark')
    
    const navigate  =  useNavigate()

    const handleMode  = (e) =>{
       
        if(e.target.checked === false)
        {
            setMode('dark')
        }
        else
        {
            setMode('light')
        }
    }


return(
<>
<nav class={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/home') ? 'active' : "" } `} aria-current="page" style={{cursor :"pointer"}} onClick={()=>navigate('/home')}>Home</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/test') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/test')} >Test</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/test1') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/test1')}>Test1</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/test2') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/test2')}>Test2</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/Rohit') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/Rohit')}>Form</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/colorpage') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/colorpage')}>Color Page</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/Myform') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/Myform')}>Color Page</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/myapi') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/myapi')}>API</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/addadmin') ? 'active' : "" } `} style={{cursor :"pointer"}} onClick={()=>navigate('/addadmin')}>Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">{mode}</a>
        </li>
            
        <li class="nav-item">
        <form class="d-flex">
                <div class="form-check form-switch">
                <input class="form-check-input" onChange={handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>        
        </form>
        </li>
      </ul>
    </div>
  </div>
</nav>


</>


)


}

export default Navbar