function promiseMethods() {
  // Creating a simple promise
  const samplePromise = new Promise((resolve, reject) => {
    const isSuccess = true; // Change to false to simulate rejection

    if (isSuccess) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  });

  // Using then() to handle resolved promise
  samplePromise.then((result) => {
    console.log("Resolved:", result);
  });

  // Using catch() to handle rejected promise
  samplePromise.catch((error) => {
    console.log("Rejected:", error);
  });

  // Using finally() to execute code regardless of resolution or rejection
  samplePromise.finally(() => {
    console.log("Finally block executed");
  });

  // Creating multiple promises and handling them together
  const promise1 = Promise.resolve("Resolved Promise 1");
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Resolved Promise 2"), 2000)
  );

  Promise.all([promise1, promise2])
    .then((results) => {
      console.log("Promises resolved together:", results);
    })
    .catch((error) => {
      console.log("Error in promises:", error);
    });
}

// Example Usage for Promise Methods
promiseMethods();
