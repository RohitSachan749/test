import react, {useEffect} from "react";
import { useDispatch } from "react-redux";
import {demoAction} from '../Actions/DemoAction'

const TestPage = () =>{

    const dispatch = useDispatch()

useEffect(()=>{
console.log("1")

})


return(

    <><h1>This is My Function Component</h1></>
)
}



export default Test1Page