import React, { useState } from "react";
import { passCreate } from "../functions/passFunc";

const NewForm: React.FC = () => {
  const item = () => {
    const [pass, setPass] = useState("");
    return (
      <div>
        <h2>NewForm</h2>
        <div>
          <label htmlFor="name">name:</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="pass">password:</label>
          <input id="pass" type="text" value={pass} />
          <button type="button" onClick={() => setPass(passCreate(15))}>
            パスワード作成
          </button>
        </div>
      </div>
    );
  };
  return (
    <form action="">
      {item()}
      <button type="button">保存</button>
    </form>
  );
};
export default NewForm;
