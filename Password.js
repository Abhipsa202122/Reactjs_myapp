
import React, { Component } from "react";

//HOC cwith state
let HOCPassword = (HOCBase) =>class extends Component{
    constructor(){
        super();
        this.state={
            password:'mypassword',
            needpw:" mnmn"
        }
    }
    render(){
        return(
        <div>
            <h1> HOC Password</h1>
            <HOCBase pass={this.state.password}/>
            </div>
            )
        }
}

//To access the state value - create a component with a prop
let PassComp = (props)=>{
    return(
    <h1>{props.pass}</h1>
    )
}

let HOCComp = HOCPassword(PassComp);

class Password extends Component{
    render(){
        return(
        <div>
            <h1> Password Component</h1>
            <HOCComp/>
            </div>
            )
        }
}

export default Password;

