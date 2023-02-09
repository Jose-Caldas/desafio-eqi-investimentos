import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;

  &:hover,
  :focus {
    border-bottom: 1px solid #ea7238;
  }

  position: relative;
  p {
    position: absolute;
    top: 55px;
    color: #f62e36;
    margin: 0;
    font-size: 12px;
  }
`;

export const CustomInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 20px;
`;
