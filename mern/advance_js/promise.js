// Promise:
// 1. resolve
// 2. reject
// 3.pending

// function func1(){
//     return new Promise (function(resolve,reject){
//         setTimeout(()=>{

//         }
//     }
// }




const students=[
    {name: "raju", subject:"bengali"},
    {name: "pritam", subject:"english"},
]

function enrollStudent(student){
    return new Promise (function (resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log("student has been enrolled");
            console.log(students);
            const error=false;
            if(!error){
                resolve();
            }

            else{
                reject();
            }
        },1000);
    })
}

function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str +=`<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log("Students have been fetched");
    },5000);
}
let newStudent={name: "indranil", subject:"python"}

    enrollStudent(newStudent).then(getStudents).catch(function(){
        console.log("some error occured")
    });
    getStudents();

    
