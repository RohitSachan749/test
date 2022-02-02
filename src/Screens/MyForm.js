import React  ,  {useState} from 'react'





const MyForm =  () =>{


  const [state , setState] = useState({

    name : "",
    email : ""

  })  


 const handleName = (e) =>{
    setState({...state ,[e.target.name]: e.target.value})

 }


 const getInput  = () =>{
     console.log(state)
 }


return(
    <>
<div class="container" >

    <h4>Enter Your name</h4>
    <input  value={state.name}  name='name' onChange={handleName}  placeholder='Enter Your name'  />

    <h4>Enter Your email</h4>
    <input  value={state.email}  name='email' onChange={handleName}  placeholder='Enter Your  Email'  />

    <br></br>
    <button onClick={getInput}>Get Value</button>
</div>
    </>
)


}


export default MyForm
