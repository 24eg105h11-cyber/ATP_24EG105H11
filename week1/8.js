let a=function(x,b){
    for(let i=0;i<a.length;i++){
        if(x[i]===b){
            return i;
        }
        else{
            return ("not found");
        }
}
}
let r1=a([200,400,300,500],200);
console.log(r1);