import React, { Component } from 'react';
let HOCChild = (HOCBase)=> class extends Component {
    render(){
        return(
        <div>
                {/* Own features  */}
                <h1> Welcome to the HOC </h1>
                <h3> I'm Password HOC component </h3>
                <button> OUTPUT BTN</button>
                <HOCBase/>
            </div>
        )
    }
}
let Button=()=>{
    return(
        <button>Input Button--HOCBase</button>

    )
}
let Buttoncomp=HOCChild(Button);
class Hoc extends Component{
    render(){
        return(
        <div>
            <form>
                <label>
                    <h1>Login Page</h1>
                    Name:<input type="text" name="name" /><br></br><br></br>
                    Password:<input type="text" pw="Passwod" /><br></br><br></br>
                    <button>Login</button>
                    <Buttoncomp/>
                </label>
        </form>
        </div>
            

        )
    }
}
export default Hoc;