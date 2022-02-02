import {createStore , applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducers from
 '../Reducers/RootReducers';


const persistedState  = 
localStorage.getItem('reduxStore') 
? 
JSON.parse(localStorage.getItem('reduxStore')) 
: 
{} ;

const enhancer = 
compose(applyMiddleware(thunk))



const store  =
 createStore(
     rootReducers ,
     persistedState , 
     enhancer)

export default store;







