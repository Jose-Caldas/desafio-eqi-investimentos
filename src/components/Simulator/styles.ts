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

export const Result = styled.div`
  padding: 0 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;

  p {
    display: flex;
    font-size: 16px;
    margin: none !important;
  }
`;

export const ApiBox = styled.div`
  border-bottom: 1px solid #000;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const Input = styled.input`
  border: none;
  padding: 16px 0;
  outline: none;
  background-color: transparent;
  font-size: 16px;
`;

export const Span = styled.span`
  text-transform: uppercase;
`;
