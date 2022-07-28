import React, { useEffect, useState } from "react";
import Item from "../molecules/Item";
import Header from "./../organisms/Header";
import Main from "./../templates/Main";
import Button from "./../atoms/Buttun";

const Information: React.FC = () => {
  const [ifFlag, setIsFlag] = useState<boolean>(false);

  return (
    <>
      <Header>
        <p>templates</p>
      </Header>
      <Main>
        <Item isFlag={ifFlag} />
        <Button isFlagFunc={setIsFlag} />

        {/* <Button /> */}
      </Main>
    </>
  );
};

export default Information;
