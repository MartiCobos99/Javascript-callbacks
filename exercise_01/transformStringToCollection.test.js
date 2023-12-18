import handleError from "./callbacks/onError.js";
import handleSuccess from "./callbacks/onSuccess.js";
import convertStringToArray from "./transformStringToCollection.js";
import validateString from "../helpers/validateString.js";

describe("Function convertStringToArray", () => {
  describe("When called with a non-empty string", () => {
    test("Should return a non-empty array", () => {
      // Arrange
      const input = "Hello World";

      // Act
      const result = convertStringToArray(input, handleError, handleSuccess);

      // Assert
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("When called with a non-string or empty value", () => {
    test("Should return an empty array", () => {
      // Arrange
      const input = "";

      // Act
      const result = convertStringToArray(input, handleError, handleSuccess);

      // Assert
      expect(result.length).toBe(0);
    });
  });
});

describe("When the function validateString is called with a value of type string", () => {
  test("Then a boolean should be returned.", () => {
    // Arrange
    const value = "Hello, my name is Martí";

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toEqual(true);
  });
});
