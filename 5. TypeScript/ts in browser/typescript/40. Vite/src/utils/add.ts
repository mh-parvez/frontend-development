const add = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
export default add;
