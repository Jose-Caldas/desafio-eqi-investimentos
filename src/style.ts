import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  min-height: 800px;
  background-color: #ddd;
  margin: 40px auto;
  padding: 30px;

  @media (max-width: 500px) {
    width: 100%;
    padding: 24px;
  }

  @media (max-width: 290px) {
    width: 100%;
    padding: 16px;
  }
`;
