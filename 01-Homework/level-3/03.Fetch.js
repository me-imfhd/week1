function fetchData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

  // Creating a Promise for the fetch operation
  const fetchPromise = new Promise((resolve, reject) => {
    // Using fetch to make an HTTP request
    fetch(apiUrl)
      .then((response) => {
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
          reject(new Error(`HTTP error! Status: ${response.status}`));
        }

        // Parse the response JSON
        return response.json();
      })
      .then((data) => {
        // Resolve the Promise with the data from the successful response
        resolve(data);
      })
      .catch((error) => {
        // Reject the Promise with any errors that occurred during the fetch
        reject(error);
      });
  });

  return fetchPromise;
}

// Example Usage for Fetch with Promises
fetchData()
  .then((data) => {
    // Handle the data from the successful response
    console.log("Data:", data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Fetch Error:", error.message);
  });
