import React, { useEffect, useState } from "react";

const Item: React.FC = () => {
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
