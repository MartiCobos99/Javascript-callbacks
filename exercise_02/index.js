import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

// Test with an empty email and log the result
console.log(createUser("", onError, onSuccess));

// Test with an email as a string and log the result
console.log(createUser("mcobos137@gmail.com", onError, onSuccess));
