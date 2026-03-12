// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

 
console.log('OTP sent successfully')
let seconds=10
let intervalId=setInterval(() => {
    seconds--;
    console.log(seconds)
    if(seconds===0){
        console.log("Resend OTP")
        clearInterval(intervalId)
    }
}, 1000); 

console.log('Friend is waiting for call')
let futureCondition=true;
const promiseObj=new Promise((fulfilled,rejected)=>{
       setTimeout(() => {
        if(futureCondition===true){
         fulfilled('promise fufullied')
       }
       else{
        rejected('promise rejected')
       }
       }, 5000);
})
console.log(promiseObj)
promiseObj
.then((message)=>console.log("message is then:",message))
.catch((error)=>console.log('erroe:',errorMessage))


console.log('I will send money in 10sec')
let futureCon=true
const promObj=new Promise((fulfilled,rejected)=>{
    setTimeout(() => {
        if(futureCon===true){
            console.log('money recieved ra betee')
        }
        else{
            console.log('Sorry betee....')
        }
    }, 10000);
})
promObj
.then((message)=>console.log('The:',message))
.catch((error)=>console.log("the:",errorMessage))
