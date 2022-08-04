import React from "react";

const NewForm: React.FC = () => {
  const item = () => {
    return (
      <div>
        <h2>NewForm</h2>
        <div>
          <label htmlFor="name">name:</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="pass">password:</label>
          <input id="pass" type="text" />
        </div>
      </div>
    );
  };
  return (
    <form action="">
      {item()}
      <button>保存</button>
    </form>
  );
};
export default NewForm;
