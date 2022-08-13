import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

type PropsType = {
  id: string;
  title: string;
  date: string;
};

const Lists = () => {
  const navigation = useNavigate();
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
      <StyledList
        key={data.id}
        onClick={() => navigation(`information/${data.title}`)}
      >
        <p className="date">{data.date}</p>
        <p className="title">{data.title}</p>
      </StyledList>
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

const StyledList = styled.li`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #000;
  padding: 12px 0;
  cursor: pointer;
  .date {
    padding: 0 8% 0 0;
  }
`;

export default Lists;
