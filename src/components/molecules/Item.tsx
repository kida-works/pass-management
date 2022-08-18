import React, { useEffect, useState } from "react";
import ReturnBtn from "./../atoms/ReturnBtn";
import { passCreate } from "../functions/passFunc";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

type PropTypes = {
  isFlag: boolean;
};
type ParamsType = {
  id: string;
};

const Item: React.FC<PropTypes> = (props) => {
  const params = useParams<ParamsType>();
  const [items, setItems] = useState({
    id: "ddd",
    title: "Google",
    name: "test",
    date: "2022/5/24",
    pass: "asdfg12345",
  });
  useEffect(() => {
    console.log(params.id);
  }, []);
  return (
    <>
      {!props.isFlag && (
        <StyledForm>
          <div className="item">
            <label htmlFor="title">Title:</label>
            <input
              name="title"
              type="text"
              value={items.title}
              onChange={(e) =>
                setItems((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="item">
            <label htmlFor="name">name:</label>
            <input
              name="name"
              type="text"
              value={items.name}
              onChange={(e) =>
                setItems((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="item">
            <label htmlFor="pass">password:</label>
            <input
              id="pass"
              type="text"
              value={items.pass}
              onChange={(e) =>
                setItems((prevState) => ({
                  ...prevState,
                  pass: e.target.value,
                }))
              }
            />
            <button
              type="button"
              onClick={(e) =>
                setItems((prevState) => ({
                  ...prevState,
                  pass: passCreate(15),
                }))
              }
            >
              パスワード作成
            </button>
          </div>
          <button type="button">保存</button>
        </StyledForm>
      )}
      {props.isFlag && (
        <StyledDiv>
          <ul>
            <li className="item">
              <span>date:</span>
              {items.date}
            </li>
            <li className="item">
              <span>title:</span>
              {items.title}
            </li>
            <li className="item">
              <span>name:</span>
              {items.name}
            </li>
            <li className="item">
              <span>pass:</span>
              {items.pass}
            </li>
          </ul>
          <ReturnBtn />
        </StyledDiv>
      )}
    </>
  );
};

const StyledForm = styled.form`
  width: 75%;
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
      font-size: 18px;
    }
  }
  button {
    border: 1px solid #000;
    padding: 8px 16px;
  }
`;

const StyledDiv = styled.div`
  width: 75%;
  margin: 0 auto;
  .item {
    padding: 0 0 16px 0;
    font-size: 18px;
    span {
      font-size: 16px;
      color: #424242;
      margin: 0 8px 0 0;
    }
  }
`;

export default Item;
