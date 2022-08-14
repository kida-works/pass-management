export const getRandam = (n: number, m: number) => {
  let num = Math.floor(Math.random() * (m + 1 - n)) + n;
  return num;
};

export const checkValueFunc = (checkValue: number[], setValue: number[]) => {
  let isFlag = true;
  for (let i = 0; i < checkValue.length; i++) {
    if (!setValue.includes(checkValue[i]) && isFlag) {
      isFlag = false;
    }
  }
  return isFlag;
};

export const passCreate = (digitsNum: number) => {
  let isFlag = false;
  let setNumber = [];
  const checkNumber = [0, 1, 2, 3];
  const count = digitsNum;
  const passItem = [
    ["a", "b", "c", "d", "e", "f", "g"],
    ["A", "B", "C", "D", "E", "F", "G"],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ["@", "&"],
  ];

  let pass: string = "";

  while (!isFlag) {
    for (let c = 1; c <= count; c++) {
      const topIndex = getRandam(1, passItem.length) - 1;
      const btmIndex = getRandam(1, passItem[topIndex].length) - 1;
      setNumber.push(topIndex);
      pass = pass + passItem[topIndex][btmIndex];
    }
    console.log(setNumber);
    isFlag = checkValueFunc(checkNumber, setNumber);
    if (!isFlag) {
      pass = "";
      setNumber = [];
    }
  }

  return pass;
};
