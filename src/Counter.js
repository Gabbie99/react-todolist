import React, {Component} from "react";




class Counter extends Component{
    constructor(){
        super();
        this.state = {
            value:0
        };
    }
    render(){
        return(
            <div>
                <h1>Counter</h1>
                <h2>{this.state.value}</h2>
                <div>
                    <button onClick= {()=> this.setState({value: this.state.value + 1})}>Increase</button>
                    <button onClick= {()=> this.setState({value: this.state.value - 1})}>Decrease</button>
                </div>
            </div>
        )
    }
}
export default Counter