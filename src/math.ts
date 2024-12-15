export function sum(a: number, b: number): number {
    return a + b;
  }
  
  export function multiplyNumbers(a: number, b: number): number {
    return a * b;
  }
  
  export function divideNumbers(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  export function subtractNumbers(a: number, b: number): number {
    return a - b;
  }
  
  export function raiseToPower(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
  
  export function remainder(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot compute remainder with a zero divisor");
    }
    return a % b;
  }
  
  export function sqrt(value: number): number {
    if (value < 0) {
      throw new Error("Cannot compute square root of negative number");
    }
    return Math.sqrt(value);
  }
  
  export function absoluteValue(value: number): number {
    return Math.abs(value);
  }
  
  export function logarithmBase10(value: number): number {
    if (value <= 0) {
      throw new Error("Logarithm input must be greater than zero");
    }
    return Math.log10(value);
  }
  
  // Исправленные функции
  export function calculateSine(angle: number): number {
    const angleInRadians = angle * Math.PI / 180;  // Преобразование в радианы
    return Math.sin(angleInRadians);
  }
  
  export function calculateCosine(angle: number): number {
    const angleInRadians = angle * Math.PI / 180;  // Преобразование в радианы
    return Math.cos(angleInRadians);
  }
  
  export function calculateTangent(angle: number): number {
    const angleInRadians = angle * Math.PI / 180;  // Преобразование в радианы
    return Math.tan(angleInRadians);
  }
  