import React, { Component } from 'react'

export default class Student extends Component {
state={
  name:"Satarupa Dutta",
  phone:"8017223415",
  email:"sata@gmail.com",
  //you can pass state as an this.props
  //city:this.props.city
  user:this.props.user  //with prop
}


  render() {
    return (
      <div>
        <h1>state component</h1>
        <p> <h4> my name is{this.state.name}</h4></p>
        <p> <h4> my email id is{this.state.email}</h4></p>
        <h5> my company is{this.props.user}</h5>
      </div>
    )
  }
}