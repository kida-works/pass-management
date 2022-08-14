import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const ReturnBtn: React.FC = () => {
  const navigation = useNavigate();
  return (
    <StyledButton onClick={() => navigation(-1)}>
      戻る
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
  bottom: 20px;
  left: 20px;
`;

export default ReturnBtn;
