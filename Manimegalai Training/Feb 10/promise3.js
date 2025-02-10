const book=new Promise((resolve,reject)=>{
    const bookName="book dora"
    if(bookName==="Harry potter"){
        resolve(1000)
    }
    else(unknownBook)
    reject(5000)

 });

book.then(()=>console.log("Found harry potter book"))
.catch(()=>console.log("Book is not found"))
.finally(()=>console.log("use it wisely"))

