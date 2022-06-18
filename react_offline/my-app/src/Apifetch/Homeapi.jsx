import React from 'react'


export default function Homeapi(){
    const createAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
    }
   createAPI()
    return (
        <div>
            Hello
        </div>
    )
}