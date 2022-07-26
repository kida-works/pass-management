import React, { ReactNode, useEffect } from "react";

type PropsType = {
  id: string;
  title: string;
  date: string;
};

const Lists = () => {
  const datas = [
    {
      id: "aaa",
      title: "Google",
      date: "2022/5/21",
    },
    {
      id: "bbb",
      title: "Google",
      date: "2022/5/22",
    },
    {
      id: "ccc",
      title: "Google",
      date: "2022/5/23",
    },
    {
      id: "ddd",
      title: "Google",
      date: "2022/5/24",
    },
  ];
  // useEffect(()=>{
  const passListsElements = datas.map((data) => {
    return (
      <li key={data.id}>
        <p>{data.title}</p>
        <p>{data.date}</p>
      </li>
    );
  });
  // },[])

  return (
    <div>
      {passListsElements && <ul>{passListsElements}</ul>}
      {!passListsElements && <p>登録しているパスワードはありません</p>}
    </div>
  );
};

export default Lists;
