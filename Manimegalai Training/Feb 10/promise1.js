

// Create three promises that resolve at different times (1s, 2s, and 3s).

let raceOccurA=new Promise((resolve,reject)=>{
    const value=true;
    if(value) 
        {
            resolve(1000,"You are in first place")
        }  
    else
    {
    reject()
    }

})
let raceOccurB=new Promise((resolve,reject)=>{
    const value=true;
    if(value)
        resolve(2000,"you are at second place")
    else
    reject()
})
let raceOccurC=new Promise((resolve,reject)=>{
    const value=true;
    if(value)
        resolve(3000,"you are at third place")
    else
    reject()
})
Promise.all([raceOccurA,raceOccurB,raceOccurC])
.then(()=>console.log('You are in first place'))
.then(()=>console.log("you are at second place"))
.then(()=>console.log("you are at third place"))









    