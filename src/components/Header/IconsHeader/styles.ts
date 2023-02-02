import styled from "styled-components";

export const Icon = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  color: #0008;
  align-items: center;
  justify-content: center;

  &:first-child {
    transform: rotate(180deg);
  }
`;
