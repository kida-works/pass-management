import React, { useEffect } from "react";
import Item from "../molecules/Item";
import Header from "./../organisms/Header";
import Main from "./../templates/Main";

const Information: React.FC = () => {
  return (
    <>
      <Header>
        <p>templates</p>
      </Header>
      <Main>
        <Item />
      </Main>
    </>
  );
};

export default Information;
