import React from "react";

type PropsType = {
  isFlagFunc: Dispatch<SetStateAction<boolean>>
} 

const Button: React.FC<PropsType> = (props) => {
  return <button >編集</button>;
};

export default Button;
