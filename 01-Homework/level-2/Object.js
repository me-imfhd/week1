// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);

  let frozenObj = Object.freeze(obj);
  console.log("After Object.freeze():", frozenObj);
  /*
    const frozenObject = Object.freeze({ key: 'value' });
    Attempting to modify a frozen object will throw an error
    frozenObject.newKey = 'newValue'; // Error: Cannot add property newKey, object is not extensible
*/

  let sealedObj = Object.seal(obj);
  console.log("After Object.seal():", sealedObj);

  const sealedObject = Object.seal({ key: "value" });

  /*
  sealedObject.key = "modifiedValue";

  // Attempting to add or remove properties will throw an error
  sealedObject.newKey = "newValue"; // Error: Cannot add property newKey, object is not extensible
  delete sealedObject.key; // Error: Cannot delete property 'key' of #<Object>
  */
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
