import React, { Component } from 'react';
let HOCChild = (HOCBase)=> class extends Component {
    render(){
        return(
        <div>
                {/* Own features  */}
                <h1> This is from the New component </h1>
                <h3> Welcome to the HOC </h3>
                <p> End of the HOC component </p>
                <button> OUTPUT BTN</button>

                {/* Base component features  */}
                <h1>Hoc Child Component</h1>
                {/* Base component features  */}
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
                <h1>High Order Component </h1>
                <Buttoncomp/>
            </div>
        )
    }
}
export default Hoc;
