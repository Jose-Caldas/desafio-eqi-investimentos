import styled from "styled-components";

export const Wrapper = styled.section`
  width: 70%;
  background-color: #ddd;
  margin-top: 40px;
  padding: 20px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Result = styled.div`
  padding: 0 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 20px;
`;
