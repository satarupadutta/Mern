// var x="hello"
// var x="hi"
// console.log(x)
// let x="hello"
// let x="hi"
// console.log(x)
// const x="hello"
// console.log(x)
// var nam1=20
// var nam2=30
// var c=nam1+nam2
// console.log(c)
// if(1==1){
//     var a="satarupa"
//     var a="hi"
// }
// console.log(a)
//for(var a=1;a<=10;a++){
        // let a="satarupa"
         //console.log(a)
    //  }

    // for (var a=1;a<=10;a++){
    //     let a="satarupa"
    //     console.log(a)
    // }

    //template_literal
    // var a="satarupa"
    // var b="btech"
    // document.getElementById("demo").innerHTML=`my name is: ${a} <br> my qualification is:${b}`

    //rest_parameter
    // function sum (...arg){
    // let total=0
    // for (let i of arg){
    //     total+=i
    // }
    // console.log(total)
    // }
    // sum(10,20,10)

//     function sum(...arg){
//         let total=0
//         for (let i of arg){
//             total+=i
//         }
//         console.log(total)
//     }
// sum(10,20,10)

//for_each
// const num=[1,2,2,5]
// let s=0;
// num.forEach(i=>{
//     s+=i
// })
// console.log(s)
// const num=[1,2,3,4,5]
// let s=0;
// num.forEach(i=>{
//     s+=i
// })
// console.log(s)

//object

// const student={
//     name:"satarupa",
//     age:27,
//     phone:8017223415
// }
// document.getElementById("demo").innerHTML="my name is:"+student.name+"<br>"+"my age is:"+student.age

// class hello{
//     message(){
//         console.log("welcome to webskitters")
//     }
//     hi(){
//         console.log("hello student")
//     }
// }
// let y=new hello()
// y.message()
// y.hi()

// class hello{
//     constructor(){
    
//                    console.log("welcome to webskitters")
//                 }
//                 hi(){
//                     console.log("hello student")
//                 }
//     }
//     let y=new hello()
//     y.hi()

// class hello{
//         constructor(name,age){
//             this.a=name;
//             this.b=age
//         }
//         hi(){
//             console.log("my name is:"+this.a+"my age is:"+this.b)
//         }
//     }
//     let y=new hello("rupkatha",27)
//     y.hi()

    // class hello{
    //     constructor(name,type){
    //         this.name=name;
    //         this.type=type;
    //     }
    //     getName(){
    //         return this.name;
    //     }
    //     getType(){
    //         return this.type;
    //     }
    // }
    // class car extends hello{
    //     constructor(name){
    //         super(name,'bus');
    //     }
    //     getName(){
    //         return 'it is a car:'+super.getName()
    //     }
    // }
    // let y=new car('volvo')
    // console.log(y.getName())
    // console.log(y.getType())

    // const student={
    //     name: "satarupa",
    //     age:27,
    //     phone:8017223415
    // }
    //document.getElementById("demo").innerHTML="my name is:"+student.name+"<br>"+"my age is:"+student.age
    // let{name,age,phone}=student
    // console.log(name)
    // let {...ff}=student
    // console.log(ff)

    // const students=["bmw","kiwi","banana","apple"]
    // let [top,,,top3]=students
    // console.log(`"my fav is:" ${top} and ${top3}`)

    //for of

    // const students=["bmw","kiwi","banana","apple"]
    // let total=""
    // for (let i of students){
    //     total+=i
    // }console.log(total)

    //callback
    // function myCalculator(num1,num2,myCallback){
    //     let sum=num1+num2;
    // }console.log(sum)
    // myCalculator(5,5)

    //arrow_practice
    // let Add=function(x,y){
    //     return (x+y)
    // }
    // console.log(Add(10,20))
    // let add=(x,y)=>(x+y)
    // console.log(add(10,20))

    // let add=(...x)=>{
    //     console.log(x)
    // }
    // add(1,2,3,4)

    // let age=5;
    // let welcome=(age<20)?
    // ()=>console.log("baby"):
    // ()=>console.log("adult");
    // welcome()

    // function laptop(make,model,year){
    //     return{
    //         make,
    //         model,
    //         year
    //     }
    // }
    //     let result=laptop("apple","macbook","2015")
    
    // console.log(result)

    // function laptop(make,model,year){
    //     return{
    //         make,
    //         model,
    //         year
    //     }
    // }
    // let result=laptop("apple","macbook","2015")
    // console.log(result)
    
    //array_method

    //const fruit=["banana","kiwi","apple","lemon"]
    //const color=["violet","green","blue"]
    //const play=["basketball","hockey"]
    //document.getElementById("demo").innerHTML=fruit.toString()
    //document.getElementById("demo").innerHTML=fruit.join("+")
   // document.getElementById("demo").innerHTML=fruit.concat(color,play)
//    document.getElementById("demo").innerHTML=fruit
//    fruit.push("kiwi")
//    document.getElementById("demo").innerHTML=fruit
// document.getElementById("demo").innerHTML=fruit
//  fruit.pop()
//     document.getElementById("demo").innerHTML=fruit
// document.getElementById("demo").innerHTML=fruit
//  fruit.shift()
//     document.getElementById("demo").innerHTML=fruit
// let total=0
// for(let i in fruit){
//     total+=i
// }console.log(total)

//for in
//const student={name:"satarupa",age:27}
// let total=""
// for(let i in student){
//     total+=i +""
// }
// console.log(total)

// let total=""
// for (let i in student){
//     total+=student[i]+""
// }
// console.log(total)

// var a="satarupa"
// var b="btech"
// var c=a+""+b
// //console.log(c)
// document.getElementById("demo").innerHTML="my name is:"+a+"<br>"+"my age is:"+b 

//fetch_api

// function getData(){
//     console.log("started getData")
//     url="https://api.github.com/users"
//     fetch(url).then((response)=>{
//         console.log("inside first user")
//         return response.json()
//     }).then((data)=>{
//         console.log("inside second user")
//         console.log(data)
//     })
// }
// getData();

//promise

// const students=[
//     {name:"indra", subject:"bengali"},
//     {name:"pulu", subject:"english"}
// ]
// function enrollStudent(student){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             students.push(student)
//             console.log("student name enrolled")
//             console.log(students)
//             const error=false
//             if(!error)
//             {
//                resolve(); 
//             }
//             else{
//                 reject();
//             }
//         },1000);
//     })
// }
//  function getStudents(){
//      setTimeout (function(){
//          let str=""
//          students.forEach(function(student){
//              str+=`<li>${student.name}</li>`
//          })
//              document.getElementById("demo").innerHTML=str
//              console.log("student name fetched")

         
//      },5000);
//  }

//  let newStudent={name:"kulu",subject:"hindi"}
//  enrollStudent(newStudent).then(getStudents).catch(function(){
//      console.log("some error occured")
//  })
// getStudents()


// const students=[
//     {name:"kulu",subject:"bengali"},
//     {name:"piu",subject:"english"}
// ]
    
// function enrollStudent(student){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             students.push(student)
//             console.log("student name enroled")
//             console.log(students)
//             const error=false
//             if(!error){
//                 resolve()
//             }
//             else{
//             reject()
//             }
//         },1000)
//     })
// }
// function getStudents(){
//     setTimeout(function(){
//         let str=""
//         students.forEach(function(student){
//             str+=`<li>${student.name}</li>`
            
//         })
//         document.getElementById("demo").innerHTML=str
//         console.log("student name is fetched")
//     },5000)
// }
// let newStudent={name:"indra",subject:"hindi"}
// enrollStudent(newStudent).then(getStudents).catch(function(){
//     console.log("some error occured")
// });
// getStudents()


// let str=""
// students.forEach(function(student){
//     str+=`<li>${student.name}</li>`

// }

//map

// const myMap=new Map()
// console.log(myMap)

// let key="hello world",key1={},key2=function(){}
// myMap.set(key,"it is a string")
// myMap.set(key1,"it is blank obj")
// myMap.set(ket2,"it is blank function")
// let value1=myMap.get(key)
// console.log(value1)
// let value2=mymap(key1)
// console.log(value2)
// let value3=myMap.get(key2)
// console.log=myMap.get(value2)
//  for(let [key,value] of myMap){
//  console.log(key,value)}
//  for(let key of myMap.keys ()){
// console.log("key is:"+key)
//  }

//  for(let values of myMap.values()){
//      console.log("value is:"+value)
//  }
//  myMap.forEach((key,value)=>{
//     console.log("key is:"+key)
//     console.log("value is:"+value)
//  })
//  console.log(myMap.size)

//  const students=[
//      ["1","harry"],
//      ["2","sejal"],
//      ["3","kulu"]
//  ]
//  let myMap=new map(students);
//  console.log(myMap.get("2"))

// let myArray=Array.from(myMap)
// console.log("array is:"+myArray)

// let mykeyArray=array.from(myMap.keys())
// console.log("mykey array is:"+mykeyArray)

// let myvalueArray=array.from(myMap.value())
// console.log("myvalue array is:"+myvalueArray)

// const fruits=new map([
// ["apples",500],
// ["banana",700],
// ["lemon",200]
// ])
// let text=""
// fruits.forEach(function(value,key){
//     text+=key +"="+value+"<br>"
// })
// document.getElementById("demo").innerHTML=text

// function getData(){
//     console.log("started getData")
//     url="https://api.github.com/users"
//     fetch(url).then((response)=>{
//         console.log("inside first user")
//         return response.json(data)
//     }) .then((data)=>{
//         console.log("inside second user")
//         console.log(data)
//     })
// }
// getData()

// const myMap=new map()
// console.log(myMap)

// let key="hello world",key1={},key2=function(){};
// myMap.set(key,"is is a string")
// myMap.set(key1,"its a blank obj")
// myMap.set(key2,"its a blank function")
// console.log(myMap)
// let value1=mymap.get(key)
// console.log(value1)

// for(let[key,value]of myMap){
//     console.log(key,value)
// }
// for(let values of myMap(key()){
//     console.log("key is:"+key)
// }
// for(let values of myMap(value()){
//     console.log("value is:"+value)
// }
// myMap.forEach(value,key)=>{
//     console.log("key is:"+key)
//     console.log("value is:"+value)
// }

const myMap=new Map();
console.log(myMap)
let key="hello",key1={},key2=function(){}
myMap.set(key,"its a string")
myMap.set(key1,"its a blank obj")
myMap.set(key2,"its a blank function")

console.log(myMap)

let values1=myMap.get(key)
console.log(values1)
let values2=myMap.get(key1)
console.log(values2)
let values3=myMap.get(key2)
console.log(values3)

for(let[key,value]of myMap){
    console.log(key,value)
}
for(let keys of myMap.keys()){
    console.log("key is:"+key)
}

for (let values of myMap.values()){
    console.log("value is:"+value)
}

myMap.forEach((key,value)=>{
    console.log("key is:"+key)
    console.log("value is:"+value)
})
console.log(myMap.size)
const students=[
    ["1","harry"]
    ["2","joe"]
    ["3","kulu"]
]
let myMap=new Map(students)
console.log(myMap.get("2"))
let myMap=new Map(students)
console.log(myMap.get("2"))

let myArray=Array.from(myMap)
console.log("map to array is:"+myArray)

let myKeyArray=Array.from(myMap.keys())
console.log("map to array is:"+myKeyArray)

let myValueArray=Array.from(myMap.values())
console.log("map to array is:"+myValueArray)

const fruits=([
    ["apple",500]
    ["banana",200]
    ["lemon",100]

])
let text=""
fruits.forEach(function(key,value){
    text+=key+"="+value+"<br>"
})
console.log(text)
document.getElementById("demo").innerHTML=text

const fruits=([
    ["apple",500]
    ["banana",200]
    ["lemon",100]
])
let text=""
fruits.forEach(function(key,value){
    text+=key+"="+value+"<br>"
})
document.getElementById("demo").innerHTML=text

function getData(){
    console.log("started getData")
    url="https://api.github.com/users"
    fetch(url).then((response)=>{
        console.log("inside first user")
        return response.json(data)
    }).then((data)=>{
        console.log("inside second user")
        console.log(data)
    })
}
getData()

const students=[
    {name:"indra",subject:"bengali"},
    {name:"kulu",subject:"hindi"}
]

function enrollStudent(student){
return new Promise(function(resolve,reject){
    setTimeout((function(){
        students.push(student)
        console.log("student name enrolled")
        console.log(students)
        const eroor=false
        if(!error){
            resolve()
        }else{
            reject()
        }
    },1000)
});
}
function getData(){
    setTimeout((function){
        let str=""
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        })
        document.getElementById("demo").innerHTML=str
        console.log("student name fetched")
    },5000)

}
let newStudent={name:"hajji",subject:"english"}
enrollStudent(newStudent).then(getData).catch((function){
    console.log("some error occured")
})
getData()