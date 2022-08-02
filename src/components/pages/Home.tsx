import React, { useEffect } from "react";
import Button from "./../atoms/Buttun";
import Lists from "./../molecules/Lists";
import Main from "./../templates/Main";

const Home: React.FC = () => {
  const text = (value: boolean) => {
    console.log(value);
  };
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
        <Button text="新規" isFlagFunc={text} argument={true} />
      </Main>
    </div>
  );
};

export default Home;
