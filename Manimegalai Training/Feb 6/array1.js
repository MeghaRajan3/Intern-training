const users = [
    { id: 1, name: 'Alice', age: 25, role: 'admin', active: true },
    { id: 2, name: 'Bob', age: 30, role: 'user', active: false },
    { id: 3, name: 'Charlie', age: 22, role: 'user', active: true },
    { id: 4, name: 'Dave', age: 35, role: 'moderator', active: true },
    { id: 5, name: 'Eve', age: 28, role: 'admin', active: false }
  ];
 
  // Loop through the users array and log each user object
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user); // Log each user object to the console
  }