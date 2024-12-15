export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
export function subtract(a, b) {
    return a - b;
}
export function power(a, b) {
    return Math.pow(a, b);
}
export function modulus(a, b) {
    if (b === 0) {
        throw new Error("Cannot calculate modulus with divisor zero");
    }
    return a % b;
}
export function squareRoot(a) {
    if (a < 0) {
        throw new Error("Cannot compute square root of negative number");
    }
    return Math.sqrt(a);
}
export function absolute(a) {
    return Math.abs(a);
}
export function log10(a) {
    if (a <= 0) {
        throw new Error("Logarithm input must be greater than zero");
    }
    return Math.log10(a);
}
export function sine(a) {
    return Math.sin(a);
}
export function cosine(a) {
    return Math.cos(a);
}
export function tangent(a) {
    return Math.tan(a);
}
