try {
num = prompt("Enter a number")
if(isNaN(num))
    throw("Enter a valid number")
console.log(num**2)
}
catch(error){
    console.log("priya")
    console.log(error)
}