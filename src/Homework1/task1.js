export function sum(arg1, arg2) {
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    return 'There are not numbers';
  }
  console.log(arg1 + arg2);
}
export function multiplication(arg1, arg2) {
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    return 'There are not numbers';
  }
  console.log(arg1 * arg2);
}
