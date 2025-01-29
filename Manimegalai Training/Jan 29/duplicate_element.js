// Remove duplicate elements from an array. 

const value=[10,40,20,30,40,40,50]

let addValue = []

let final = value.map((num)=> {
if (!addValue.includes(num)) {
    addValue.push(num);
  }})
  
  console.log(addValue)