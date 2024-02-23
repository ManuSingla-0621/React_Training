import React, { Component } from 'react'

export default class Counter extends Component {

componentDidUpdate()
{
    console.log("Updation will happen....");
}

  render() {
    return (
      <div>  
        <h1>{this.props.number}</h1>
        </div>
    )
  }
}
