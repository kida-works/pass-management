import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./../atoms/Buttun";
import Lists from "./../molecules/Lists";
import Main from "./../templates/Main";

const Home: React.FC = () => {
  const navigate = useNavigate()
   const navFunc = () => {
    navigate("./create")
   }
  useEffect(() => {
    console.log("test");
  }, []);
  return (
    <div>
      <header>
        <h1>Home</h1>
      </header>
      <Main>
        <Lists />
        <Button text="新規" isFlagFunc={navFunc} argument={true} />
      </Main>
    </div>
  );
};

export default Home;
