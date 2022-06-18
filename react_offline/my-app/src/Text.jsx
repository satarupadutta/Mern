import React from 'react'
const mystyle={
    color:'green',
    border:'2px solid black',
    backgroundColor:'yellow',
    textAlign:'center',
    width:'400px',
    height:'300px',
    marginLeft:'450px',
    letterSpacing:'2px'
}

const Text = () => {
  return (
    <div style={mystyle}>
      <h1>TEXT FORMATTING</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut deleniti ut pariatur atque eos dolore aperiam, eaque voluptates odit perferendis repellendus omnis enim porro tempore. Optio sit quae nihil consequuntur?</p>

      </div>
  )
}
export default Text