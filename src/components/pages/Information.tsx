import React, { useEffect, useState } from "react";
import Item from "../molecules/Item";
import Header from "./../organisms/Header";
import Main from "./../templates/Main";
import Button from "./../atoms/Buttun";
// import {RouteComponentProps, useNavigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

type UserProps = {
  id: string;
};

type PropsType = {
  id: string;
};

const Information: React.FC = () => {
  const navigation = useNavigate();
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
        <button onClick={()=>navigation(-1)}>戻る</button>
        <p>templates</p>
      </Header>
      <Main>
        {/* {ifFlag && <Item />} */}
        {<Item isFlag={ifFlag} />}
      </Main>
    </>
  );
};

export default Information;
