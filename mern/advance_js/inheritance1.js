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




class Car extends vehicle{
    constructor(name){
        super(name,'bus');
    }
    getName(){
        return'it is a car:' +super.getName();
    }

}  
let car=new Car ('volvo');
console.log(car.getName());//it is car:Tesla
console.log(car.getType());//car