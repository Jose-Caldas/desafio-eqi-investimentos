import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 30px;
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
  /* align-items: center;
  justify-content: space-between; */
  width: 100%;
  height: 50px;
  background-color: #eee;
  margin: 16px 0 30px;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
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

// export const Icon = styled.div`
//   position: absolute;
//   color: white;
//   left: 15px;
// `;
