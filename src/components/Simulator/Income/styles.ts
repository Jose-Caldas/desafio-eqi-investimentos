import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IncomeTitle = styled.h1`
  font-size: 12px;
`;

export const IncomeButtons = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #eee;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
`;

export const IncomeLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  position: relative;

  cursor: pointer;
`;
export const IncomeRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-left: 1px solid #9999;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;

export const Icon = styled.div`
  position: absolute;
  color: white;
  left: 15px;
`;
