const afterSecond=new Promise((resolve,reject)=>{
    let result =false
   
    if(result)
        resolve(2000)
else
    reject()
})

afterSecond.then(success)
.catch(failure)

function success()
{
    console.log("Hello World")
}

function failure()
{
    console.log("Thanks")
}