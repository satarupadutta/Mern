import React from 'react'

export default function Houseapi(){
    const createAPI=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json)
        .then(json=>console.log(json))
    }

createAPI()
return(
    <div>
        hello fetch
    </div>
)
}