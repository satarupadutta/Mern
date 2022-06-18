function getData(){
    console.log("Started getData")
    url="https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first user")
        return response.json();

    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}
getData()