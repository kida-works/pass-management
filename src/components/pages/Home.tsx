import React, { useEffect } from "react";
import Lists from "./../molecules/Lists";
import Main from "./../templates/Main";

const Home: React.FC = () => {
  const titleObject = [
    {
      mainTitle: "Google",
      subTitle: "google アカウント",
      pass: "test1234",
    },
    {
      mainTitle: "Microsoft",
      subTitle: "Microsoft アカウント",
      pass: "test5678",
    },
  ];

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
