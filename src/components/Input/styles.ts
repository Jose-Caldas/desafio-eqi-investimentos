import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #333;
  justify-content: space-between;
  padding-bottom: 12px;

  &:hover,
  :focus {
    border-bottom: 1px solid #ea7238;
  }

  position: relative;
  p {
    position: absolute;
    top: 65px;
    color: #f62e36;
    margin: 0;
    font-size: 12px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 12px;
  margin-bottom: 20px;
`;

export const CustomInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  color: inherit;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-right: 4px;
`;
