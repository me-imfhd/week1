function setTimeoutExample() {
  const shouldCancel = Math.random() < 0.5; // 50% chance to cancel the timeout

  const timeoutId = setTimeout(() => {
    console.log("Timeout function executed after 2000 milliseconds");
  }, 2000);

  if (shouldCancel) {
    clearTimeout(timeoutId);
    console.log("Timeout canceled randomly");
  }
}

// Example Usage for setTimeout
setTimeoutExample();

// setInterval Example
function setIntervalExample() {
  let counter = 0;

  const intervalId = setInterval(() => {
    console.log(`Interval function executed (${++counter} times)`);

    if (counter === 5) {
      clearInterval(intervalId); // Stop the interval after 5 executions
    }
  }, 1000);

  // clearInterval is not demonstrated here since it's used in the setInterval example
}

// Example Usage for setInterval
setIntervalExample();
