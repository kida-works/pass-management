export const getRandam = (n: number, m: number) => {
  let num = Math.floor(Math.random() * (m + 1 - n)) + n;
  return num;
};

export const passCreate = (digitsNum:number) => {
  const count = digitsNum;
  const passItem = [
    ["a", "b", "c", "d", "e", "f", "g"],
    ["A", "B", "C", "D", "E", "F", "G"],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ["@", "&"],
  ];
  let pass: string = "";

  for (let c = 1; c <= count; c++) {
    const topIndex = getRandam(1, passItem.length) - 1;
    const btmIndex = getRandam(1, passItem[topIndex].length) - 1;
    pass = pass + passItem[topIndex][btmIndex]
  }
  

  return pass;
 
};
