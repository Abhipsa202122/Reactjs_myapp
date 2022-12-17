import React, { Component } from 'react';
//class section 
class Course extends Component{
    //render method - to display the output 
    render(){
        return(
        <div>
            <h1> COURSE COMPONENT</h1>
            <h3>Courseid:{this.props.id}</h3>
            <h3>Coursename:{this.props.name}</h3>
            <h3>Courseduration:{this.props.duration}</h3> 
        </div>
        )
    }
}

//export section  -- component is ready to be reused in another files 
export default Course;