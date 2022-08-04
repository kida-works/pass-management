import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Buttun";
import NewForm from "../molecules/NewForm";
import Main from "../templates/Main";

const Create: React.FC = () => {
  const navigation = useNavigate();
  return (
    <>
      <header>
        <h1>Create</h1>
        <button onClick={() => navigation(-1)}>戻る</button>
      </header>
      <Main>
        <NewForm />
      </Main>
    </>
  );
};

export default Create;
