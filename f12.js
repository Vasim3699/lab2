function createProfile({ name, email }) {
    return { name, email };
  }
  

  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St'
  };
  
  console.log(createProfile(user));
 
  