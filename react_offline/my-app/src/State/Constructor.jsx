import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(props){
    super(props)
    this.state={
  name:"Satarupa Dutta",
  phone:"8017223415",
  email:"sata@gmail.com",
  //you can pass state as an this.props
  city:this.props.city
  
}
}  

  render() {
    return (
      <div>
        <h1>state component</h1>
        <p> <h4> my name is{this.state.name}</h4></p>
        <p> <h4> my email id is{this.state.email}</h4></p>
        <h5> <h5>my city id is{this.props.city}</h5></h5>

      </div>
    )
  }
}