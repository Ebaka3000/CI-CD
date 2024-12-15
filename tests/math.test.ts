import { sum, multiplyNumbers, divideNumbers, subtractNumbers, raiseToPower, remainder, sqrt, absoluteValue, logarithmBase10, calculateSine, calculateCosine, calculateTangent } from "../src/math";

describe("Mathematical Functions Tests", () => {
  test("sum: adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("sum: adds a positive and a negative number", () => {
    expect(sum(5, -3)).toBe(2);
  });

  test("sum: adds two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test("sum: adds zero to a number", () => {
    expect(sum(0, 3)).toBe(3);
  });

  test("multiplyNumbers: multiplies two positive numbers", () => {
    expect(multiplyNumbers(2, 3)).toBe(6);
  });

  test("multiplyNumbers: multiplies by zero", () => {
    expect(multiplyNumbers(2, 0)).toBe(0);
  });

  test("multiplyNumbers: multiplies negative numbers", () => {
    expect(multiplyNumbers(-2, -3)).toBe(6);
  });

  test("divideNumbers: divides two positive numbers", () => {
    expect(divideNumbers(6, 3)).toBe(2);
  });

  test("divideNumbers: divides negative numbers", () => {
    expect(divideNumbers(-6, -3)).toBe(2);
  });

  test("divideNumbers: divides by one", () => {
    expect(divideNumbers(6, 1)).toBe(6);
  });

  test("divideNumbers: throws error when dividing by zero", () => {
    expect(() => divideNumbers(6, 0)).toThrow("Cannot divide by zero"); // Исправленное сообщение об ошибке
  });

  test("subtractNumbers: subtracts two positive numbers", () => {
    expect(subtractNumbers(5, 3)).toBe(2);
  });

  test("subtractNumbers: subtracts a positive and a negative number", () => {
    expect(subtractNumbers(5, -3)).toBe(8);
  });

  test("subtractNumbers: subtracts two negative numbers", () => {
    expect(subtractNumbers(-5, -3)).toBe(-2);
  });

  test("raiseToPower: raises a base to an exponent", () => {
    expect(raiseToPower(2, 3)).toBe(8);
  });

  test("remainder: calculates remainder of division", () => {
    expect(remainder(5, 3)).toBe(2);
  });

  test("remainder: throws error when divisor is zero", () => {
    expect(() => remainder(5, 0)).toThrow("Cannot compute remainder with a zero divisor"); // Исправленное сообщение об ошибке
  });

  test("sqrt: calculates square root of positive number", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("sqrt: throws error for negative number", () => {
    expect(() => sqrt(-9)).toThrow("Cannot compute square root of negative number"); // Исправленное сообщение об ошибке
  });

  test("absoluteValue: returns the absolute value of a number", () => {
    expect(absoluteValue(-5)).toBe(5);
  });

  test("logarithmBase10: computes logarithm base 10 of a number", () => {
    expect(logarithmBase10(100)).toBe(2);
  });

  test("logarithmBase10: throws error for non-positive values", () => {
    expect(() => logarithmBase10(0)).toThrow("Logarithm input must be greater than zero"); // Исправленное сообщение об ошибке
    expect(() => logarithmBase10(-10)).toThrow("Logarithm input must be greater than zero"); // Исправленное сообщение об ошибке
  });

  test("calculateSine: calculates sine of an angle", () => {
    expect(calculateSine(30)).toBeCloseTo(0.5);
  });

  test("calculateCosine: calculates cosine of an angle", () => {
    expect(calculateCosine(60)).toBeCloseTo(0.5);
  });

  test("calculateTangent: calculates tangent of an angle", () => {
    expect(calculateTangent(45)).toBeCloseTo(1);
  });
});
