const people = [   { name: "Alice", age: 25 },  
    { name: "Bob", age: 17 },  
     { name: "Charlie", age: 30 }, 
       { name: "David", age: 16 } ]; 
       
function old(people){
   return people.age>18;
}
let result =people.filter(old);
console.log(result);