import handleError from "./callbacks/onError";
import handleSuccess from "./callbacks/onSuccess";
import convertStringToArray from "./transformStringToCollection";

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
