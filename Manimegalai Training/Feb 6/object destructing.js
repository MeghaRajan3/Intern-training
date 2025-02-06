const user = { name: "Alice", age: 25, location: { city: "New York", country: "USA" } }

const { name:fullname, age, location: { country, city } } = user;
console.log(fullname);  // இது இப்போது "New York" என்பதைக் காட்டு
