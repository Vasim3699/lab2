function mergeUserData(...userObjects) {
    return Object.assign({}, ...userObjects);
  }
  

  const userDetails = {name: 'CVR', age: 25};
  const userAddress = {address: 'Mangalpally', city: 'Hyderabad'};
  const userPreferences = {theme: 'Engineering Edu', language: 'EN'};
  
  console.log(mergeUserData(userDetails, userAddress, userPreferences));

