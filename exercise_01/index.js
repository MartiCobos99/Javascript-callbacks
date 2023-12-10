import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToArray from "./transformStringToCollection.js";

// Test with a numeric value and log the result
console.log("Number: " + transformStringToArray(1, onError, onSuccess));

// Test with a value as an array and log the result
console.log("Array: " + transformStringToArray([1, 2, 3], onError, onSuccess));

// Test with a boolean value and log the result
console.log("Bool: " + transformStringToArray(false, onError, onSuccess));

// Test with an empty string value and log the result
console.log(transformStringToArray("", onError, onSuccess));

// Test with a string value and log the result
console.log(transformStringToArray("Hello World", onError, onSuccess));
