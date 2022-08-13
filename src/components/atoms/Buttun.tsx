import React from "react";
import styled from "styled-components";

type MyFunctionType = (value: boolean | string) => void;
interface PropsType {
  isFlagFunc: MyFunctionType | React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  argument: boolean;
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <StyledButton onClick={() => props.isFlagFunc(props.argument)}>
      {props.text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
  background: #2196f3;
  position: fixed;
  top: 20px;
  right: 20px;
`;

export default Button;
