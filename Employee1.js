import React, { Component } from 'react';
class Employee1 extends Component{
    //Declare employee array in the parent component

    emp=[ { id : 101, name : 'Jaya', skills : ['Angular', 'Node']},{ id : 102, name : 'Shyam', skills : ['React', 'Node']},{ id : 103, name : 'Jyothi', skills : ['MongoDB', 'Node']}]
    //emplist = this.emp.map((value)=> <li> {value}</li>)
    //empkeys=this.emp.map((value,index)=> <li key={index}>{index}=={value}</li>)

    //constructor(){
     //    super();



    //}
    render(){
        return(
            

        <div>
            <h1> EMPLOYEE COMPONENT</h1>
            <ul>{this.enplist}</ul>
            <ul>{this.empkeys}</ul>

        </div>
        )
    }
}

//export section  -- component is ready to be reused in another files 
export default Employee1;

