// mockApi.js
const mockApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Item 1', price: 10 },
          { id: 2, name: 'Item 2', price: 15 },
          // ... add other items as needed
        ]);
      }, 1000); // Simulate a 1-second delay
    });
  };
  
  export default mockApi;
  