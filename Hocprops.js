import React, { Component } from 'react';
let HOCChild = (HOCBase)=> class extends Component {
    constructor(){
        super();
        this.state={
            counter:10
        }
    }
    ModifyState(){
        this.setState({
            counter:this.state.counter+ 5
        });
    }
}
    
    //Step 8: 
    //Create a  function component which take the props
let ButtonComp = (props)=>{
    return(
        // Step 8.1 : Access the props in the HocBase component using the parameter 
        <button onClick={props.Propsmethod}> Counter value : {props.Propscounter}</button>
    )
}
let ButtonCompState=HOCChild(ButtonComp);

class Hocprops extends Component{
    render(){
        return(
            <div>
                <h1> Hoc component with props and states </h1>
            
                <ButtoncompState/>
            </div>
    

        )
    }
}
export default Hocprops;