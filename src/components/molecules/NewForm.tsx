import React from "react";
import { passCreate } from "../functions/passFunc";

const NewForm: React.FC = () => {
  const item = () => {
    return (
      <div>
        <h2>NewForm</h2>
        <div>
          <label htmlFor="name">name:</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="pass">password:</label>
          <input id="pass" type="text" />
        </div>
      </div>
    );
  };
  return (
    <form action="">
      {item()}
      <div onClick={() => passCreate()}>保存</div>
    </form>
  );
};
export default NewForm;
