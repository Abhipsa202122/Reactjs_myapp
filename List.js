import React, { Component } from 'react';

//class section 
class List extends Component{
     //create rainbow list;
     rainbow = ['violet','indigo','blue','green','yellow','orange','red'];
     //Create keys from the rainbow list and display the list item
     rainbowlist = this.rainbow.map((value)=> <li> {value}</li>)
     rainbowkeys = this.rainbow.map((value,index)=> <li key={index}>{index}=={value}</li>)

     //render method - to display the output
     render(){
        return(
        <div>
            <h1>LIST COMPONENT</h1>
            <h4> Rainbow list display </h4>
            {/* To display the list of vlaues use list,table, select  */}
                <ul>{this.rainbow}</ul>
                {/* To display the list of values and the keys   */}
                <ul>{this.rainbowlist}</ul>
                {/* To display the list of values and the keys   */}
                <ul>{this.rainbowkeys}</ul>



          
        </div>
        )
    }
}

//export section  -- component is ready to be reused in another files 
export default List
