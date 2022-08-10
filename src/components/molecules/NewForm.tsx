import React, { useState } from "react";
import { passCreate } from "../functions/passFunc";

const NewForm: React.FC = () => {
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const item = () => {
    return (
      <div>
        <h2>NewForm</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">name:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
