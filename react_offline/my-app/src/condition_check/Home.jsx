import React from 'react'
import {Login} from './Login'
import {Logout} from './Logout'
import 'bootstrap/dist/css/bootstrap.css'
const myStyle={
  backgroundColor:'aqua'
}

export const Home = () => {
  const isLogin=true
  const func=()=>{
    if(isLogin){
      return <Login/>
    }
    else{
      return <Logout/>
    }
  }
//   return (
//     <div style={myStyle}>
//       <h1>nbb</h1>
//       {func()}
//       </div>

//   )
// }
return(
  <div>
    <div className='container'>
      <h1 className='bg bg-info'>welcome to web page</h1>
    </div>
    <div className='container-fluid'>
      <h1 className='bg bg-success'>welcome to web page</h1>
    </div>
    
      <h1 className='bg bg-info'>welcome to web page</h1>
    
    {func()}
  </div>

)
}
