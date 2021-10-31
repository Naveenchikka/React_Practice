import React from "react";
import { Component } from "react";

class Counter extends Component 
{
    constructor(props)
    {
        console.log("constructor did mount");
        super(props);
     this.state = {
         count: 0,
         by: 1, 
     };  
    }
    
    increment = () =>
    {
        this.setState({count: this.state.count+this.state.by});
    }

    decrement = () =>
    {
        this.setState({count: this.state.count-this.state.by});
    }

    reset = () =>
    {
        this.setState({count: 0});
    }
   
    componentDidMount()
    {
        console.log("component did mount");
        //Intial API calls
    }

    componentDidUpdate()
    {
        console.log("component updated");
        //API calls
    }
    
    //MUST RETURN AN OBJECT
    static getDerivedStateFromProps(props, state)
    { 
        console.log("component derivedstate from props");
        console.log("Props:", props);
        console.log("States:",state);
        return {
            by: props.by
        };
    }

    shouldComponentUpdate()
    {
      return true;
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
       console.log("getSnapshotBeforeUpdate called");
       console.log(prevState.count,this.state.count);
    }


    render() {
        console.log("render mount");
      return (
          <>
           <p>Count: {this.state.count}</p>
           <button onClick={this.increment}>Increment</button>&nbsp;
           <button onClick={this.decrement}>Decrement</button>&nbsp;
           <button onClick={this.reset}>Reset</button>
           <button onClick={ () => this.forceUpdate()}>Forced Update</button>
          </>
      );
    }
        
}
    

export default Counter;