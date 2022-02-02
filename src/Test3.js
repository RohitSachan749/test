import  React  ,{useState} from 'react'

const Rohit  =  () =>{

const [color , setColor] = useState("red")


const handleInput  = (e) =>{

    setColor(e.target.value)

    if(e.target.value  === "")
    {
        setColor("red")
    }

}


return(
<>
<hi style={{color : "blue"}} >This is ChangeColor</hi>
<h4>Now Color Value is {color}</h4>
<input onChange={handleInput}></input>
</>



)



}

export default Rohit