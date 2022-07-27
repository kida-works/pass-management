import React from "react";

interface PropsTypes {
  children: React.ReactElement[] | React.ReactElement;
}

const Main: React.FC<PropsTypes> = ({ children }) => {
  return (
    <main>
      <h2>Main</h2>
      {children}
    </main>
  );
};

export default Main;
