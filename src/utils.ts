export function parseArrayValues(value: string): string | string[] {
  const isArray = value.startsWith("Array(") && value.endsWith(")");
  if (isArray) {
    const innerValues = value.substring(6, value.length - 1);
    return innerValues.split(",").map((k) => k.trim());
  }
  return value;
}
export function trendDateChecker(trendDate: Date) {
  if (trendDate > new Date()) throw new Error("Invalid trendDate: Cannot query for a future date");
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate.getTime() - trendDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  if (diffDays > 15) throw new Error("Invalid trendDate: Cannot query for a date more than 15 days in the past");
}

