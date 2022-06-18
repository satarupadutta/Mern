// const exam={
//     subject: "bengali",
//     time:"three hours",
//     examiner:"internal"
// }
//document.getElementById("demo").innerHTML="subject:" +exam.subject+"<br>" +"time:"+exam.time
//let{ subject,time,examiner}=exam;
//console.log(subject);

//let{...ff}=exam
//console.log(ff)

// const myFunction=['python','php','laravel','java'];
// let[top,,,top3]=myFunction;
// console.log(`my favourite language are: ${top} and ${top3}`)

function myfunction(a,b, ...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[2]);
    console.log(c.length);
    console.log(c.indexOf('messi'));

}
myfunction("ronaldo","neymar","pele","messi","sunil")