export function requiredParameter(parameter) {
  throw new Error(`${parameter} is required`);
}