import React , { Component } from "react";

class Students extends Component{
    constructor(){
        super(); 
        this.state={
            marks:60
        }
    }
    Mark(){
        let marks=this.state.marks
        if (marks===100){
            alert("your marks is more than 100")


        }
        this.setState ({
            marks:this.state.marks+5

        })
    }

        //this.setState ({

            //rollno:'5',
            //firstname: "Abhi",
           // Marks:"80"
           //Marks:{this.states.Marks}
    
    
    render(){
        return(
        <div>
            Student component State variables in React 
            <h3> Student rollno is : {this.props.studentsrollno}</h3>
            <h3> Student firstname is :{ this.props.studentname} </h3>
            <h3> Student Marks is :{ this.state.marks} </h3>
            
            <button onClick={()=>{this.Mark()}}> Increase Mark</button>
        </div>
        )
    }
}

export default Students;


