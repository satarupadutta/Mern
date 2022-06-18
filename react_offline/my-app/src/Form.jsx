import React from 'react';
import './App.css'
const mystyle={
    
    border:'2px solid violet',
    backgroundColor:'aqua',
    margin:'50px 450px 50px 450px',

}



 export const Form = () => {
    return (
      <div style={mystyle}>
      <form>
      <h1><u><center>Student Registration Form</center></u></h1>
      <div className="formm"><label style={{marginLeft:'100px'}}>First Name:</label>
       <input style={{marginLeft:'100px'}} type='text' placeholder="enter the first name">
      </input></div><br></br><br></br>

      <div className="formm"><label style={{marginLeft:'100px'}}>Last Name:</label>
      <input style={{marginLeft:'100px'}}type='text' placeholder="enter the last name"></input></div><br></br><br></br>

      <div className="formm"><label style={{marginLeft:'100px'}}>D.O.B:</label>
      <input style={{marginLeft:'100px',width:'160px'}}type='date' placeholder="enter date of birth name"></input></div><br></br><br></br>
        
      <div className="formm"><label style={{marginLeft:'100px'}}>Password:</label>
      <input style={{marginLeft:'70px'}}type='password' placeholder="enter password"></input></div><br></br><br></br>

      <div className="formm"><label style={{marginLeft:'100px'}}>Confirm Password:</label>
      <input style={{marginLeft:'50px'}}type='password' placeholder="enter confirm password"></input></div><br></br><br></br>


      <div className="formm"><label style={{marginLeft:'100px'}}>Email:</label>
      <input style= {{marginLeft:'100px'}} type='Email' placeholder="enter email"></input></div><br></br><br></br>

      <div className="formm"><label style={{marginLeft:'100px'}}>City:</label>
      

        <select style={{marginLeft:'50px',width:'160px'}}>
        <option value="kolkata">kolkata</option>
        <option value="bangalore">bangalore</option>
        <option value="delhi">delhi</option>
        <option value="mumbai">mumbai</option>
        </select></div><br></br><br></br>
        <center>
        <input style={{width:'100px',height:'30px'}}type="submit" value="register"></input>
        <br></br><br></br></center>
         </form>

        </div>
    )
  }