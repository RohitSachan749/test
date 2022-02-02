import axios from "axios";
import React , {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddAdmin =  () =>{


const [data ,setData]   = useState({

    name : "",
    mobile : "",
    email : "",
    password :""

})  


const handleInput  = (e) =>{


    setData({...data , [e.target.name] : e.target.value})

}

const handleSubmit = () =>{
    var reg = /^[6-9]\d{9}$/
    var reg2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(data.name === ""){
        toast.error(' Please Enter Your name', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    else if(data.name.length < 2){
        toast.error("Please Enter a Valid name", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    else if(!reg.test(data.mobile)){
 
        toast.error("Please Enter a Valid Mobile Number", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    else if(!reg2.test(data.email)){alert("Please Enter a Valid Email")}
    else if(data.password === ""){alert("Please Enter Password")}
    else if(data.password.length  < 3){alert("Password Should be 3 char Long")}
    else{

        axios post('http://localhost:6655/admin/registerAdmin' , data).then((result)=>{
        console.log(data)
    }


}

const tostclick = () =>{
    toast.error(' Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}





return(

<>
<div style={{padding:20}}>
<ToastContainer />

<h1>Fill this form To Add Admin</h1>
<input name="name" value={data.name} onChange={handleInput} placeholder="Enter Your Name" />
<br/>
<br/>
<input  name="mobile" value={data.mobile} onChange={handleInput} placeholder="Enter Your Mobile Number" />
<br/>
<br/>
<input name="email" value={data.email} onChange={handleInput} placeholder="Enter Your Mobile Email" />
<br/>
<br/>
<input name="password" value={data.password} onChange={handleInput} placeholder="Enter Your Mobile Password" />
<br/>
<br/>
<button onClick={handleSubmit}  >Register</button>

</div>
</>

)




}

export default AddAdmin