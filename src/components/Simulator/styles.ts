import styled from "styled-components";

export const Wrapper = styled.section``;

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
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 80px;
`;

export const Container = styled.div``;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  height: 100%;

  p {
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

export const ResultContainer = styled.div`
  width: 100%;
`;

export const Result = styled.div`
  padding: 0 20px;
`;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
  padding: 20px 0;
  width: 100%;
`;

export const Span = styled.span`
  text-transform: uppercase;
`;

// export const Text = styled.h1`
//   font-size: 12px;
// `;
