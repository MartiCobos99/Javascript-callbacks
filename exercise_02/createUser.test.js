import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import createUser from "./createUser.js";

describe("createUser function", () => {
  describe("when called with a non-empty email", () => {
    test("should return a string", () => {
      // Arrange
      const email = "mcobos137@gmail.com";

      // Act
      const result = createUser(email, onError, onSuccess);

      // Assert
      expect(typeof result).toBe("string");
    });
  });

  describe("when called with an empty email", () => {
    test("should return a string", () => {
      // Arrange
      const email = "";

      // Act
      const result = createUser(email, onError, onSuccess);

      // Assert
      expect(typeof result).toBe("string");
    });
  });
});
