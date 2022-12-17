import React, { Component } from 'react';
//class section 
class Product extends Component{
    //render method - to display the output 
    constructor(){
        super();
        this.state={
            pid:'P100',
            price:45000
        }
    }
    modifyState(){
        this.setstate({
            pid:'P560',
            price:545767
        }
    )}
    render(){
        return(
            
        <div>
            <h1> PRODUCT COMPONENT to demonsrate states in variable</h1>
            <h3> Product ID is : {this.props.pid}</h3>
            <h3> Product price is : {this.state.price}</h3>
            <button onClick={()=>{this.modifyState()}}> ModifyState</button>
        </div>
        )
    }
}
//export section  -- component is ready to be reused in another files 
export default Product;