import onError from "./callbacks/onError";
import onSuccess from "./callbacks/onSuccess";
import transformStringToArray from "./transformStringToCollection";

describe("transformStringToArray function", () => {
  describe("when called with a non-empty string", () => {
    test("should return a non-empty array", () => {
      // Arrange
      const value = "Hello World";

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLengthGreaterThan(0);
    });
  });

  describe("when called with a non-string or empty value", () => {
    test("should return an empty array", () => {
      // Arrange
      const value = "";

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
  });
});
