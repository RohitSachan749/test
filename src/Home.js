
import React from  'react'

import {Link} from 'react-router-dom'

import {useNavigate} from 'react-router-dom'



const Home  =  () =>{

  const navigate = useNavigate()

var temp  =  []

var name  =  "Rohit"


for(let  i = 1 ;  i < 11  ; i++)
{
    temp.push(i)
}

console.log(temp)



// State & Props
const handleMyNav= () =>{
  navigate('/colorpage')
}




  return(
<>
<h3>This is Home page</h3>

{/* { temp.map((data , i) =>(
<h1 key={i} >{data}</h1>
))} */}


<Link to="/test">
 <button>Click to Go Test Page</button>
 </Link>  
 

<button onClick={handleMyNav}>Click to Go Color Page</button>
</>
  )  

}

export default Home
