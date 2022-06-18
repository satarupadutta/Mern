//1.var_let_const
// var x="hello world"
// var x="hello"
// var x="welcome"
// console.log(x)
// let x="satarupa"
// x="welcome"
////let x="hello"
//console.log(x)
//const x="welcome"
////x="satarupa"
////const x="hello"
//console.log(x)
// const x="welcome"
// var name="hi"
// const u ="satarupa"
// console.log(x)
// var nam1=20
// var nam2=30
// var result=nam1+nam2
// console.log(result)
// var nam1=40
// var nam2=30
// var result=nam1-nam2
// console.log(result)
// if(1==1){
//     var a="satarupa"
//     var a="hello"
//    console.log(a)
// }console.log(a)
// for(a=1; a<=10; a++){
//     console.log(a)
// }
// for(var a=1;a<=10;a++){
//     let a="satarupa"
//     console.log(a)
// }
// if(1==1)
// {
//     const a="satarupa"
// }console.log(a)



//template_literal

// var a="satarupa"
// var b="b.tech"
// //document.getElementById("demo").innerHTML="my name is:" +a +"<br>"+"my qualification is:" +b
// console.log(`my name is: ${a} and my qualification is:${b}`)

// let firstName="jonny"
// let lastName="doe"
// console .log(`${firstName}${lastName}`)

//rest parameter
// function sum(...arg){
// //console.log(arg)
// let total=0;
// for (let i of arg){
// total +=i
// }console.log(total)
// }

// sum(10,20,30)

// function sum(...arg){
//    // console.log(arg)
//    let total=0
//    for (let i of arg){
//        total+=i
//    }
//    console.log(total)
// }

// sum(50,20,30)

// function myfunction(a,b,...c){
//     console.log(`${a} ${b}`)
//     console.log(c)
//     console.log(c.length)
//     console.log(c[1])
//     console.log(c.indexOf("messi"))
// }
// myfunction("ronaldo","neymar","messi","pele")

// let hello=(x,y)=>(x+y)
// console.log(hello(2,3))


//promise

// const student=[
//     {name:"indra", subject:"bengali"},
//     {name:"raju",subject: "english"},
// ]

// function enrollStudent(student){
//     return new Promise(function(resolve,reject){
//     setTimeOut (function(){
//         students.push(student);
//         console.log("student name is enrolled")
//         console.log(students)
//         const error=false;
//         if(!error){
//             resolve();
//         }else{
//             reject();
//         }
//     },1000);
// });
// }

// function getStudents(){
//     setTimeOut (function(){
//     let  str=""
//     students.forEach(function(student){
//      str+=`<li>${student.name}</li>`
//     });
//     document.getElementById("demo1").innerHTML.html=str
//     console.log("students name is fetched")
//     },5000);
// };
// let newStudent={name:"taru",subject:"hindi"}
// enrollStudent(newStudent).then(getStudents).catch(function(){
//     console.log("some error occured")
// });
// getStudents();

// const students=[
//     {name: "raju", subject:"bengali"},
//     {name: "kayal",subject:"english"},
// ]

// function enrollStudent(student){
//     return new Promise (function (resolve,reject){
//       setTimeout(function(){
//           students.push(student)
//           console.log("student name is enrolled")
//           console.log(students)
//           const error=false;
//           if(!error){
//               resolve();
//           }else{
//               reject();
//           }
//       },1000);
          
      
//     })
// }
// function getStudents(){
//     setTimeout(function(){
//         let str="";
//         students.forEach(function(student){
//             str+=`<li>${student.name}</li>`
//         })
//         document.getElementById("demo1").innerHTML=str;
//         console.log("student name is fetched");
    

// },5000);
// }
// let newStudent={name:"dutta",subject:"hindi"}
// enrollStudent(newStudent).then(getStudents).catch(function(){
//     console.log("some error occured")
// });
// getStudents();

    
//for each loop
// const num=[1,2,3,5,6]
// let s=0
// num.forEach(i=>{
//     s+=i
// })
// console.log(s)
// const num=[1,2,3,4,5]
// let s=0
// num.forEach(i=>{
//     s+=i
// })
// console.log(s)

//object
// class car{
//     var a="welcome to webskitters";
// }
// const result=new car();

// const std=
//     {name:"satarupa",
//     age:27,
//     phone:5017223415,
//     email:"sata@gmail.com"
// }
// document.getElementById("demo2").innerHTML ="My Name:"+ std.name+"<br>"+"My Age:" +std.age +"<br>"+
// "My Email:"+std.email+"<br>"+"My Phone No:"+std.phone

// class hello{
//     message(){
//         console.log("hello student")
//     }
//     hi(){
//         console.log("hello")
//     }
// }
// let y=new hello()
// y.message()
// y.hi()
// class hello{
//       constructor(){
//             console.log("hello student")
//         }
//         hi(){
//             console.log("hello")
//         }
//     }
//     let y=new hello()
    
//     y.hi()
// class hello{
//     constructor(name,age){
//           this.a=name
//           this.b=age
//       }
//       hi(){
//           console.log("your name is:"+this.a+ "your age is:"+this.b)
//       }
//   }
//   let y=new hello("rupkatha",27)
  
//   y.hi()

// class hello{
//         constructor(name,type){
//               this.name=name;
//               this.type=type
//           }
//           getName(){
//               return this.name;
//           }
//           getType(){
//             return this.type;
//           }
//       }
//       class car extends hello{
//           constructor(name){
//               super(name,'bus');
//           }
//           getName(){
//               return 'it is a car:'+super.getName()
//           }
//       }
//       let y=new car('volvo')
//       console.log(y.getName())
//       console.log(y.getType())

//object_desstructure
// const student={
//     name:"satarupa",
//     age:27,
//     phone:8017223415
// }
//document.getElementById("demo3").innerHTML="my name is:" +student.name+"<br>"+"my age is:"+student.age
// let {name,age,phone}=student
// console.log(name)
// let{...ff}=student
// console.log(ff)

// const student=["java","c","php","laravel"]
// let [top,,,top3]=student
// console.log(`"my fav subject is:" ${top} and ${top3}`)


//for of

// const car=["bmw","taxi","mercedes"]
// let text=""
// for (let i of car)
// text+=i+"<br>"
// console.log(text)
// const student=["java","c","laravel","php"]
// let[top1,,,top4]=student
// console.log(`"my fav is:"${top1} and ${top4}`)

// const student=["indra","nil","kelo"]
// let text=""
// for (let i of student)
// text+=i
// console.log(text)

//callback
// function myCalculator(num1,num2,myCallback){
//     let sum=num1+num2
//     console.log((sum))
// }
// myCalculator(5,5)

//arrow_practice

// let add= function(x,y){
//     return (x+y)
// }
// console.log(add(10,20))

// let add=(x,y)=>(x+y)

// console.log(add(10,20))
let add=(...x)=>{
    console.log(x)
}
add(1,2,3,4)

// let age=5;
// let welcome=(age<20)?
// ()=>console.log("baby"):
// ()=>console.log("adult");
// welcome();

// let age=20;
// let welcome=(age<30)?
// ()=>console.log("baby"):
// ()=>console.log("adult");
// welcome()
// function laptop(make,model,year){
//     return {
//     make,
//     model,
//     year
// }
// }
// let result=laptop("apple","macbook","2015")
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
 const fruits=["banana","papaya","kiwi","lemon"]
  //const play=["basketball","cricket","football"]
  //const color=["yellow","red","green"]
// console.log(fruits.length)
// console.log(fruits[2])
//document.getElementById("demo4").innerHTML=fruits.toString()
//document.getElementById("demo4").innerHTML=fruits.join("+")
//document.getElementById("demo4").innerHTML=fruits.concat(play,color)
//document.getElementById("demo4").innerHTML=fruits
//fruits.push("kiwi");
//document.getElementById("demo4").innerHTML=fruits
//document.getElementById("demo4").innerHTML=fruits
//fruits.pop()
//document.getElementById("demo4").innerHTML=fruits
//  let total=0
//  for(let i of fruits){
//      total+=i
//  }
// console.log(total)

//for_in

// const student={name:"indra",age:27,phone:8017223415}
// let total=""
// for(let i in student){
//     total+=student[i] +""
// }console.log(total)


//addition

//  var num1=20
//  var num2=30
//  var result=num1+num2
// console.log(result)
//document.getElementById("text").innerHTML=result

// var a="sata"
// var b="b.tech"
// var c=a +""+b
//console.log(c)
//document.getElementById("text").innerHTML="my name is:" +a+"<br>"+"my qualification is:"+b

//fetch_api

// function getData(){
//     console.log("strated getData")
//     url="https://api.github.com/users"
//     fetch(url).then((response)=>{
//         console.log("inside first user")
//         return response.json();
    
// }).then((data)=>{
//     console.log("inside the second user")
//     console.log(data)

// })
// }
// getData()

// function getData(){
//     console.log("started getData")
//     url="https://api.github.com/users"

// fetch(url).then((response)=>{
//     console.log("inside first user")
//     return response.json()
// }).then((data)=>{
//     console.log("inside second user")
// console.log(data)
// })
// }
// getData()

// function getData(){
//     console.log("strated getData")
//     url="https://api.github.com/users"
//     fetch(url).then((response)=>{
//         console.log("inside the first user")
//         return response.json()
//     }).then((data)=>{
//         console.log("inside second user")
//         console.log(data)
//     })

// }getData()

