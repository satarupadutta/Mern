// class car{
//     var a="welcome to webskitters";
// }
// const result=new car();

// class hello{
//     message(){
//         console.log("hello world")
//     }
//     sorry(){
//         console.log("hello student")
//     }
// }
// let g=new hello();
// g.message();
// g.sorry();

// class hello{
//     constructor(){
//         console.log('kasol')
//     }
//     hi(){
//         console.log('manali')
//  }
// }
// let y=new hello();
// y.hi();

// class hello{
//     constructor(name,age){
//         this.a=name;
//         this.b=age;

//     }
//     hi(){
//         console.log("your name is:" +this.a + "your age is:" + this.b)

//     }

// }
//  let y=new hello("rupkatha",27)
//  y.hi();

class vehicle{
    constructor(name,type){
        this.name=name;
        this.type=type;
        
    }
    getName(){
        return this.name;
    }
    getType(){
        return this.type;
    }
}
class car extends vehicle{
    constructor(name){
    super(name,'bus');
    
    }
    getName(){
        return 'it is a car:' +super.getName();
    }
}
let y= new car('volvo')
console.log(y.getName());
console.log(y.getType());