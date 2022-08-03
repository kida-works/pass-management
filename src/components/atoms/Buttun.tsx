import React from "react";

type MyFunctionType = (value: boolean | string) => void;
interface PropsType  {
  isFlagFunc: MyFunctionType | React.Dispatch<React.SetStateAction<boolean>>
  text: string
  argument: boolean
}

const Button: React.FC<PropsType> = (props) => {
  return <button onClick={()=>props.isFlagFunc(props.argument)}>{props.text}</button>;
};

export default Button;
