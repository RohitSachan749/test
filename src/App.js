import React , {useState} from 'react'
import Routing from './Routing/Navigation';
import Navbar from './Layout/Navbar';


import Store from './Store/Store'
import { Provider } from 'react-redux'
import store from './Store/Store';


const App  = () => {

store.subscribe(()=>{
  localStorage.setItem('reduxStore' , JSON.stringify(Store.getState()))
})

return(
<Provider store={Store}>

  <>
   <Navbar/>
  <Routing/>

  </>
  </Provider>
)



}


export default App;