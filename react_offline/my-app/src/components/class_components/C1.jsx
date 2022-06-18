import React, { Component } from 'react'
const mystyle={
  border:'2px solid aqua',
  backgroundColor:'pink',
  width:'500px',
  textAlign:'center'
}
export default class C1 extends Component {
  render() {
    return (

      <div style={mystyle}>
       <h1> It is my home</h1></div>
    )
  }
}