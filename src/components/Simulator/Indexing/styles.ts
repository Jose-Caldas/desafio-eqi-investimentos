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

export const Title = styled.h1`
  font-size: 12px;
`;

export const IndexingType = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #eee;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
`;

export const LeftButtom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  position: relative;
  box-sizing: border-box;

  cursor: pointer;
`;

export const CenterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
  cursor: pointer;
`;

export const RightButtom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Icon = styled.div`
  position: absolute;
  color: white;
  left: 15px;
`;
