import React, { useEffect, useState } from "react";
import Item from "../molecules/Item";
import Header from "./../organisms/Header";
import Main from "./../templates/Main";
import Button from "./../atoms/Buttun";
import ReturnBtn from "../atoms/ReturnBtn";
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
  const [ifFlag, setIsFlag] = useState<boolean>(false);
  const [items, setItems] = useState({
    id: "ddd",
    title: "Google",
    date: "2022/5/24",
    pass: "asdfg12345",
  });

  return (
    <>
      <Header>
        <p>templates</p>
      </Header>
      <Main>
        {<Item isFlag={ifFlag} />}
        <Button text="編集" isFlagFunc={setIsFlag} argument={!ifFlag} />
        <ReturnBtn />
      </Main>
    </>
  );
};


export default Information;
