export function parseArrayValues(value: string): string | string[] {
  const isArray = value.startsWith("Array(") && value.endsWith(")");
  if (isArray) {
    const innerValues = value.substring(6, value.length - 1);
    return innerValues.split(",").map((k) => k.trim());
  }
  return value;
}

