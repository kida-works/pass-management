import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

type propTypes = {
  isFlag: boolean
};

const Item: React.FC<propTypes> = (props) => {
  const [items, setItems] = useState({
    id: "ddd",
    title: "Google",
    date: "2022/5/24",
    pass: "asdfg12345",
  });
  useEffect(() => {}, []);
  return (
    <>
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
