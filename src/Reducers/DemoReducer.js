import {SET_MY_DATA} from '../Actions/Types'

const DemoReducer  = (state ,  action) => {
    console.log(action)


    if( typeof state === undefined )
    {
        return {
            mydata  : {}
        }
    }

    switch(action.type){


        case SET_MY_DATA :
            console.log(action.type)
            return {
                ...state,
                mydata : action.data

            }
        default:
            return {
                ...state
            }

    }
}


export default DemoReducer
