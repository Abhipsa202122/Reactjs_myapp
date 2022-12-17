import React, { Component } from 'react';
let HOCpass = (HocBase) => class extends Component{
    render{
        <div>
            <h1>Hoc Password</h1>
        </div>
    }
}
//class section 
class Hoc3 extends Component{
    constructor(){
        super(); 
        this.state=
        pw="abhi12@3",
        
    }

render{
    <div>
        <h1>Hoc Password</h1>
        Hoc 
    </div>
}
}

    
    //render method - to display the output 
class Hoc3 extends Component{    
    render(){
        return(
        <div>
            <h1>Password Component</h1>
            Password:<input type="text" pw="password" />
            needpassword:<input type="text" pw="password" />
            <button>Login</button>
        </div>
        )
    }
}
//export section  -- component is ready to be reused in another files 
export default Hoc3;