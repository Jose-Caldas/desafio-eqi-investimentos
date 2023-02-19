import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Graph = styled.div`
  h1 {
    font-size: 10px;
    text-align: center;
  }
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  margin-top: 16px;
  font-weight: bold;

  &:nth-child(1):before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ea7238;
    border-radius: 50%;
    margin-right: 4px;
  }

  &:nth-child(2):before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 50%;
    margin-right: 4px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
  }
`;
