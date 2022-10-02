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
          <label htmlFor="title">Title: </label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="name">name: </label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="pass">password: </label>
          <input
            id="pass"
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="button" onClick={() => setPass(passCreate(15))}>
          パスワード作成
        </button>
      </StyledDiv>
    );
  };
  return (
    <form action="">
      {item()}
      <StyledButton type="button" onClick={() => dataKeep(title, name, pass)}>
        保存
      </StyledButton>
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
      color: #424242;
    }
    input {
      border-bottom: 1px solid #000;
    }
  }
  button {
    border: 1px solid #000;
    display: block;
  }
`;

const StyledButton = styled.button`
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  background: #2196f3;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
export default NewForm;
