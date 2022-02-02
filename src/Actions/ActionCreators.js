import {SET_MY_DATA} from './Types'




export const setMyData = (data) =>(console.log(data),{
    type: SET_MY_DATA,
    data
})