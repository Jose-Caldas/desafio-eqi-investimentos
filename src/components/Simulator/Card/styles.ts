import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
  border-radius: 2px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);

  &:nth-child(6) {
    p {
      color: #08a85f;
    }
  }
  &:nth-child(4) {
    p {
      color: #08a85f;
    }
  }
  &:nth-child(2) {
    p {
      &:after {
        content: "%";
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 14px;
`;

export const Value = styled.p`
  font-weight: 500;
`;
