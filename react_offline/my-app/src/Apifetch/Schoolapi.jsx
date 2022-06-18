import React from 'react'

export default function Schoolapi(){
    const createAPI=()=>{
        fetch('https://api.github.com/users')
        .then(response=>response.json)
        .then(json=>console.log(json))
    }

createAPI()
return(
    <div>
       school is closed due to summer vacation
    </div>
)
}