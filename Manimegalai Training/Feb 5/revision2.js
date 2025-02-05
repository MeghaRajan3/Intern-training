let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

// Set To array

let set =new Set([10,20,30,40])
let arr= Array.from(set);
console.log(arr);

// Template Literals
var firstName = "Jane";
var lastName = "Doe";
var greeting=`Hello ${firstName}  ${lastName}`
console.log(greeting);




//   object destructing

  const person = {
    name: "Alice",
    age: 28,
    country: "USA"
  };
  
let{name,
    age,country}=person;
  
  console.log(name, age, country);


// Default parameters

  function greet(name, greeting="hello") {
    console.log(`${name} Hi ${greeting}`);
  }
  
  greet("Mani");          
     
  
  
