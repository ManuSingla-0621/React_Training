import React, { Component } from 'react'
import Counter from './Component/Counter'
export default class App extends Component {
  constructor()
  {
    super();
    this.state=
    {
      count:0
    }
  }

  componentDidMount()
  {
    console.log("Mounting of the variable is happen....");
  }

  increment()
  {
    this.setState({count : this.state.count+1});
  }


  render() {
    return (
      <div>
        <Counter number={this.state.count}></Counter>
        <button onClick={()=>{this.increment()}}>Click Me</button>
       </div>
    )
  }
}
