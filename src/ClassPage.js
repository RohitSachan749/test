import React , {Component} from 'react'


class MyComponent extends Component {
  constructor(props){

        super(props);
        this.state= {

            count : 0

        }

    }

handleButton = (x) =>{
    
this.setState({count : x +1})
}

    

render(){

    return(

        <>
        <h1>This is My Class Component</h1>
        <h1>Count is  : {this.state.count}</h1>
        <button  onClick={()=>this.handleButton(this.state.count)}  >Click </button>
        {/* <h1>Value of Count in App.js is {this.props.mynumber}</h1> */}
        </>
    )


}

}

export default MyComponent











