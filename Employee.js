//import section 
import React, { Component } from 'react';
//class section 
class Employee extends Component{
    //render method - to display the output 
    render(){
        return(
        <div>
            <h1> EMPLOYEE COMPONENT</h1>
            <h3>Empid:{this.props.empid}</h3>
            <h3>Empname:{this.props.ename}</h3>
            <h3>Empunit:{this.props.unit}</h3>
            <h3>Empfacility:{this.props.facility}</h3>
            
        </div>
        )
    }
}

//export section  -- component is ready to be reused in another files 
export default Employee;