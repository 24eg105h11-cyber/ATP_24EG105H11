let a=function(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>c){
        return b;
    }
    else{
        return c;
    }
}
let r1=a(10,20,30);
console.log("this is big",r1);