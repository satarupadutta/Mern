
//Create a class named "Model" which will inherit the methods from the "Car" class:

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//         console.log("I have a" + this.carname)
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
     
//     }
//     show() {
//         console.log(this.present() + ',it is a' + this.model)
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");
//   myCar.show();

//Create a getter and a setter for the "carname" property:


// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     get cnam() {
//       console.log ("the car name is" + this.carname);
//     }
//     set cnam(x) {
//       this.carname = x;
//     }
    
//   }
  
//   let myCar = new Car("Ford");
//   

//Use a setter to change the carname to "Volvo"

class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      console.log(this._carname);
    }
    set carname(x) {
      this._carname = x;
    }
  }
  
  let myCar = new Car("Ford");
  myCar.carname = "Volvo";