import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

type propTypes = {
  isFlag: boolean;
};
type ParamsType = {
  id: string;
};

const Item: React.FC<propTypes> = () => {
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
      {!items && <p>情報がありません</p>}
      {items && (
        <ul>
          <li>{items.title}</li>
          <li>{items.pass}</li>
        </ul>
      )}
    </>
  );
};

export default Item;
