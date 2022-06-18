function sum(...arg){
    //console.log(arg)
    let total=0;
    for(let i of arg){
    total+=i
}
    console.log(total)
}
sum(20,30,10)
function myfunction(a,b, ...c){
        console.log(`${a} ${b}`);
        console.log(c);
        console.log(c[2]);
        console.log(c.length);
        console.log(c.indexOf('messi'));
    
    }
    myfunction("ronaldo","neymar","pele","messi","sunil")