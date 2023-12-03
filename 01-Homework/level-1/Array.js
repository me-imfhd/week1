// Array handbook

// run each function to see the output, play and learn by doing.

// push()
function pushExample() {
  let arr = [1, 2, 3];
  console.log("Before push:", arr);
  arr.push(4);
  console.log("After push:", arr);
}
pushExample();

// pop()
function popExample() {
  let arr = [1, 2, 3];
  console.log("Before pop:", arr);
  arr.pop();
  console.log("After pop:", arr);
}
popExample();

// shift()
function shiftExample() {
  let arr = [1, 2, 3];
  console.log("Before shift:", arr);
  arr.shift();
  console.log("After shift:", arr);
}
shiftExample();

// unshift()
function unshiftExample() {
  let arr = [1, 2, 3];
  console.log("Before unshift:", arr);
  arr.unshift(0);
  console.log("After unshift:", arr);
}
unshiftExample();

// splice()
function spliceExample() {
  let arr = [1, 2, 3];
  console.log("Before splice:", arr);
  arr.splice(1, 0, "a");
  console.log("After splice:", arr);
}
spliceExample();

// slice()
function sliceExample() {
  let arr = [1, 2, 3];
  console.log("Before slice:", arr);
  let newArr = arr.slice(1, 2);
  console.log("After slice:", newArr);
}
sliceExample();

// concat()
function concatExample() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log("Before concat:", arr1);
  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample();

// forEach()
function forEachExample() {
  let arr = [1, 2, 3];
  console.log("Before forEach:", arr);
  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample();

// map()
function mapExample() {
  let arr = [1, 2, 3];
  console.log("Before map:", arr);
  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample();

// filter()
function filterExample() {
  let arr = [1, 2, 3, 4, 5];
  console.log("Before filter:", arr);
  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample();

// reduce()
function reduceExample() {
  let arr = [1, 2, 3, 4, 5];
  console.log("Before reduce:", arr);
  let sum = arr.reduce(function (total, item) {
    return total + item;
  }, 0);
  console.log("After reduce:", sum);
}
reduceExample();

// find()
function findExample() {
  let arr = [1, 2, 3, 4, 5];
  console.log("Before find:", arr);
  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample();

// sort()
function sortExample() {
  let arr = [5, 2, 3, 4, 1];
  console.log("Before sort:", arr);
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample();
