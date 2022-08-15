interface dataTyps {
  title: string;
  name: string;
  pass: string;
}

export const dataKeep = (title: string, name: string, pass: string) => {
  console.log(title);
  console.log(name);
  console.log(pass);
  if (!title) {
    alert("titleを設定してください");
  }
  if (!name) {
    alert("nameを設定してください");
  }
};
