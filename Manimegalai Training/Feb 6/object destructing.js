const user = { name: "Alice", age: 25, location: { city: "New York", country: "USA" } }

const { name:fullname, age, location: { country, city } } = user;
console.log(fullname); 
