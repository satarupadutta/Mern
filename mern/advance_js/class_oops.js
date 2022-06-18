// class hello{
//     message(){
//         console.log("hello world")
//     }
//     sorry(){
//         console.log("hello everyone")
//     }
// }
// let a=new hello()
// a.message()
// a.sorry()

// class student{
//     constructor(){
        
//         console.log("hello student")
//     }
//     hi(){
//         console.log("hi")
//     }
// }
// let b=new student()
// b.hi()

class student{
    constructor(name,age){
        this.a=name
        this.b=age
        //console.log("call contructor function")
    }
    hello(){
        console.log("your name is" + this.a+  "your age is"+ this.b)
    }
}
let c=new student("raju kayal",27)
//c.name="raju kayal"
c.hello()