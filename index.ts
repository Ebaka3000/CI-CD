export function addNumbers(num1: number, num2: number): number {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input values");
  }

  return num1 + num2;
}
