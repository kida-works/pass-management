import React from "react";
import { useNavigate } from "react-router-dom";
import NewForm from "../molecules/NewForm";
import Main from "../templates/Main";
import ReturnBtn from "../atoms/ReturnBtn";


const Create: React.FC = () => {
  const navigation = useNavigate();
  return (
    <>
      <header>
        <h1>Create</h1>
      </header>
      <Main>
        <NewForm />
        <ReturnBtn />
      </Main>
    </>
  );
};

export default Create;
