export function sum(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "There are not numbers";
  }
  console.log(arg1 + arg2);
}

export function multiplication(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "There are not numbers";
  }
  console.log(arg1 * arg2);
}

export function countStringSymbols(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "There are not strings";
  }
  console.log(string1.length + string2.length);
}
