import styled from "styled-components";

export const Wrapper = styled.section`
  width: 70%;
  background-color: #ddd;
  margin-top: 40px;
  padding: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-bottom: 16px;
`;

export const Section = styled.section`
  display: flex;
  gap: 80px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Result = styled.div`
  padding: 0 20px;

  button {
    &:disabled {
      background-color: red;
    }
  }
`;

export const ResultContainer = styled.div`
  width: 100%;
`;
export const SimulateContainer = styled.div``;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  padding: 20px 0;
  width: 100%;
`;

export const Box = styled.div`
  border-bottom: 1px solid #333;
  margin: 20px 0 30px 0;
`;

export const Span = styled.span`
  text-transform: uppercase;
`;

////////

export const Card = styled.section`
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
`;

export const Text = styled.h1`
  font-size: 12px;
`;

// buttons left

export const IncomeWrapper = styled.section`
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

// button right

export const IndexingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const IndexingTitle = styled.h1`
  font-size: 12px;
`;

export const IndexingButtons = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #eee;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
`;

export const IndexingLeft = styled.button`
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

export const IndexingCenter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
  cursor: pointer;
`;

export const IndexingRight = styled.button`
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
