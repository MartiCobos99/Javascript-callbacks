import validateString from "./validateString.js";

describe("validateString function", () => {
  test("should return false when invoked with undefined value", () => {
    // Arrange
    const value = undefined;

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });

  test.each([
    [4, false],
    [[8, 9, 10, 12], false],
    [false, false],
    [
      {
        name: "Martí",
        city: "Barcelona",
      },
      false,
    ],
    ["     ", false],
  ])("should return %p when invoked with %p", (value, expected) => {
    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(expected);
  });

  test("should return true when invoked with a non-empty string", () => {
    // Arrange
    const value = "Hello, my name is Martí";

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(true);
  });
});
