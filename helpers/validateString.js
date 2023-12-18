/**
 * @param {any} value
 * @returns {boolean}
 */
const validateString = (value) =>
  typeof value === "string" && value.trim().length > 0;

export default validateString;
