import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "valor";
    transform: rotate(-90deg);
    font-size: 10px;
    text-align: center;
  }
`;

export const Graph = styled.div`
  h1 {
    font-size: 10px;
    text-align: center;
  }

  h2 {
    font-size: 12px;
    margin-top: 16px;

    @media (max-width: 280px) {
      font-size: 10px;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #333;
      border-radius: 50%;
      margin-right: 4px;
    }
  }

  p {
    font-size: 12px;
    margin-top: 16px;
    font-weight: bold;

    @media (max-width: 280px) {
      font-size: 10px;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #ea7238;
      border-radius: 50%;
      margin-right: 4px;
    }
  }
`;
