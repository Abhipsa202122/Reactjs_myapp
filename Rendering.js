import React, { Component } from "react";
class Rendering extends Component{
    render(){
        //Step 1: Declare variables 
        //variable declaration 
        let layout = null;
        let flag = true;
        //Step 2: Writing a condition 
        if(flag){
            //success condition
            layout = <div>
                <h1 style={{'color':'aqua'}}> Success Layout Condition </h1>
                </div>
        }
        else{
            //failure condition
            layout = <div>
                <h1 style={{'color':'deeppink'}}> Failure Layout Condition</h1>
                </div>
        }
        //Step 2: Writing a condition
        if(flag){
            //success condition 
            layout = <div style={{'borderStyle':'dashed','height':'80%','borderColor':'blue'}}>
                <h1 style={{'color':'green','backgroundColor':'yellow'}}> Success Layout Condition </h1>
                </div>
        }
        else{
            //failure condition
            layout = <div style={{'borderStyle':'solid','height':'80%','borderColor':'blue'}}>
                <h1 style={{'color':'red','backgroundColor':'yellow'}}> Failure Layout Condition</h1>
                </div>
        }
        return(
            <div>
                <h1> Conditional Render in the component </h1>
                {/* Step 3: To display the variable in the output as JSX syntax  */}
                {/* JSX syntax to retreive the value of the variable  */}
                {layout}
                </div>
            )
            }
}
export default Rendering;
    
