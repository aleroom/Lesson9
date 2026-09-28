// Написать свой метод myFilter в прототипе массивов
declare global {
  interface Array<T> {
    myFilter(callback: (value: T, index: number, array: T[]) => boolean): T[];
  }
}

Array.prototype.myFilter = function <T>(this: T[], callback: (value: T, index: number, array: T[]) => boolean): T[] {
  const result: T[] = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]!, i, this)) {
      result.push(this[i]!);
    }
  }

  return result;
};

const arr = [1, 5, -4, 3, -2, 0];

console.log(arr.myFilter((value) => value > 0));
