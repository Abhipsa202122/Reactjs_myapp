import React, { Component } from "react";

//Step 1: Create HOC 
let HOCChild = (HocBase) => class extends Component{
     //Step 2: Create State varibales 
     constructor(){
        //Step 3: Call your base class constructor (Component)
        super();
        //Step 4: Initialize the state data 
        this.state={
            counter:10
        }
    }
    //Step 5: Modify the state data 
    ModifyState(){
        //Step 6: Use setState() 
        this.setState({
            counter:this.state.counter+ 5
        });
    }
    render(){
        return( 
        <div>
            <h1> HOC with Props and States</h1>
            {/* Step 7: PAss then states as props  */}
            {/* Pass the props and states to the component  */}
            <HocBase Propscounter={this.state.counter} Propsmethod={()=>this.ModifyState()} />
            </div>
            )
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

//Step 9 : Create an object
let ButtoncompState = HOCChild(ButtonComp);

class Hocprops1 extends Component{
    render(){
        return(
        <div>
            <h1> HOC Component with Props and States</h1>
            {/* Step 10 : Display the output of the Button Comp State  */}
            <ButtoncompState/>
            </div>
            )
        }
}

export default Hocprops1;

