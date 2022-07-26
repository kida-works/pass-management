import React, { useEffect, useState } from "react";
import ReturnBtn from "./../atoms/ReturnBtn";
import { passCreate } from "../functions/passFunc";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

type PropTypes = {
  isFlag: boolean;
  items: itemsType[];
};
type ParamsType = {
  id: string;
};

type itemsType = {
  id: string | number;
  title: string;
  name: string;
  date: string;
  pass: string;
};

const Item: React.FC<PropTypes> = (props) => {
  const params = useParams<ParamsType>();
  const [items, setItems] = useState(props.items);

  const itemListEdit = items.map((item) => {
    return (
      <div>
        <div className="item">
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            value={item.title}
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
            value={item.name}
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
            value={item.pass}
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
      </div>
    );
  });

  const itemList = items.map((item) => {
    return (
      <div>
        <div className="item">
          <label htmlFor="title">Title</label>
          <p>{item.title}</p>
        </div>
        <div className="item">
          <label htmlFor="name">name</label>

          <p>{item.name}</p>
        </div>
        <div className="item">
          <label htmlFor="pass">password</label>
          <p>{item.pass}</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    // console.log(params.id);
  }, []);
  return (
    <>
      {!props.isFlag && (
        <StyledForm>
          {itemListEdit}
          <button type="button">保存</button>
        </StyledForm>
      )}
      {props.isFlag && (
        <StyledDiv>
          {itemList}
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
