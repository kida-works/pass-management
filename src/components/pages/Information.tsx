import React, { useEffect, useState } from "react";
import Item from "../molecules/Item";
import Header from "./../organisms/Header";
import Main from "./../templates/Main";
import Button from "./../atoms/Buttun";
import styled from "styled-components";
// import {RouteComponentProps, useNavigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

type UserProps = {
  id: string;
};

type PropsType = {
  id: string;
};

const Information: React.FC = () => {
  const [ifFlag, setIsFlag] = useState<boolean>(true);
  const [text, setText] = useState<string>("編集");
  const [items, setItems] = useState([
    {
      id: "ddd",
      title: "Google",
      name: "test",
      date: "2022/5/24",
      pass: "asdfg12345",
    },
    {
      id: "ddd",
      title: "Google",
      name: "test",
      date: "2022/5/24",
      pass: "asdfg12345",
    },
  ]);
  useEffect(() => {
    if (ifFlag) {
      setText("編集");
    } else {
      setText("戻る");
    }
  }, [ifFlag]);

  return (
    <>
      <Header>
        <p>templates</p>
      </Header>
      <Main>
        {<Item isFlag={ifFlag} items={items} />}
        <Button text={text} isFlagFunc={setIsFlag} argument={!ifFlag} />
      </Main>
    </>
  );
};

export default Information;
