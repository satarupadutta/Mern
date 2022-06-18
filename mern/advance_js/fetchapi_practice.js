function getData(){
    console.log("started getData")
    url="https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first user")
        return response.json();
    }) .then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}
getData()
