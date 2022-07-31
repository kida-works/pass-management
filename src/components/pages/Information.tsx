import React, { useEffect, useState } from "react";
import Item from "../molecules/Item";
import Header from "./../organisms/Header";
import Main from "./../templates/Main";
import Button from "./../atoms/Buttun";
import {RouteComponentProps} from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{id: string}>;

type PropsType={

}

const Information: React.FC<{}> = (props) => {
  const {id:string} = props.match.params
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
        {/* {ifFlag && <Item />} */}
        {<Item isFlag={ifFlag} />}
      </Main>
    </>
  );
};

export default Information;
