
import React, { Component } from "react";

//High Order Component  - structure 
//1. Create a function 
//2. input  : component  --- HOCBase
//3. output : component (with exisitng logic + new logic )  ---- HOCChild

let HOCChild = (HOCBase)=> class extends Component {
    render(){
        return(
        <div>
            <HOCBase/>
            {/* Own features  */}
            <div height="50%" style={{'color':'blue','backgroundColor':'beige','borderStyle':'groove'}}>
                <p> This is the paragraph</p>
                </div>
                {/* Base component features  */}
                </div>
                )
            }
}

//Pending ??? -- We have to create the HOCBAse() logic 

//Creating a button 
//creating a function to represent a button 
let loginfn = ()=>{
    return (
    <button> InputBTN -- HOCBase </button>
    )
}

//PAss the button functionality to the HOCChild component 
let ButtonComp = HOCChild(loginfn);
class Hoc2 extends Component{
    render(){
        return(
        <div>
            Enter Mobile number : <input type="text"></input><br/>

            Enter the OTP : <input type="text" maxLength={6} ></input><br/>

                    <h1>Login Page</h1>
                    
                    <button>Login</button>
                    <ButtonComp/>
        </div>
            

        )
    }
}
export default Hoc2;

