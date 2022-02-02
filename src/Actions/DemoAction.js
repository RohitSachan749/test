import { setMyData } from './ActionCreators';



export const demoAction = (data) =>{

return (dispatch) =>{
    console.log(data)

    dispatch(setMyData(data))
}
}







