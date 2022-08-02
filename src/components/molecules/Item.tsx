import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

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
    date: "2022/5/24",
    pass: "asdfg12345",
  });
  useEffect(() => {
    console.log(params.id);
  }, []);
  return (
    <>
      {/* <p>パラメータ：{params}</p> */}
      {!props.isFlag && (
        <form>
          <div>
            <label htmlFor="name">name:</label>
            <input name="name" type="text" />
          </div>
          <div>
            <label htmlFor="pass">password:</label>
            <input id="pass" type="text" />
          </div>
          <button>保存</button>
        </form>
      )}
      {props.isFlag && (
        <ul>
          <li>{items.title}</li>
          <li>{items.pass}</li>
        </ul>
      )}
    </>
  );
};

export default Item;
