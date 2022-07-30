import React, { useEffect, useState } from "react";
import Item from "../molecules/Item";
import Header from "./../organisms/Header";
import Main from "./../templates/Main";
import Button from "./../atoms/Buttun";

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
        {ifFlag && <Item />}
        {<Item isFlag={ifFlag} />}
      </Main>
    </>
  );
};

export default Information;
