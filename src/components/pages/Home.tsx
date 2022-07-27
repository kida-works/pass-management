import React, { useEffect } from "react";
import Lists from "./../molecules/Lists";
import Main from "./../templates/Main";

const Home: React.FC = () => {
  

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
      </Main>
    </div>
  );
};

export default Home;
