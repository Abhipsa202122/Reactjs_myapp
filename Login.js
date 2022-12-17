import React, { Component } from 'react';
//class section 
class Login extends Component{
    //render method - to display the output 
    render(){
        return(
        <div>
            <form>
                <label>
                    <h1>Login Pages</h1>
                    Name:<input type="text" name="name" />
                    Password:<input type="text" pw="password" />

                    <button>Login</button>
                </label>
        </form>
        </div>
        )
    }
}

//export section  -- component is ready to be reused in another files 
export default Login


