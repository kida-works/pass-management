import React, { useState } from "react";
import styled from "styled-components";
import { passCreate } from "../functions/passFunc";
import { dataKeep } from "../functions/dataKeepFunc";

const NewForm: React.FC = () => {
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const item = () => {
    return (
      <StyledDiv>
        <h2>NewForm</h2>
        <div className="item">
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="name">name:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="pass">password:</label>
          <input
            id="pass"
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="button" onClick={() => setPass(passCreate(15))}>
            パスワード作成
          </button>
        </div>
      </StyledDiv>
    );
  };
  return (
    <form action="">
      {item()}
      <button type="button" onClick={() => dataKeep(title, name, pass)}>
        保存
      </button>
    </form>
  );
};

const StyledDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  .item {
    padding: 0 0 16px 0;
    label {
      display: inline-block;
      width: 80px;
    }
    input {
      border-bottom: 1px solid #000;
    }
  }
`;
export default NewForm;
