import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #ddd;
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: 200px 1fr 400px;
  width: 80%;
  gap: 30px;
`;

export const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
`;

export const InputCenter = styled.input`
  width: 100%;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 16px;
  margin-right: 30px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  max-width: 100%;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 16px;
  padding: 4px 10px;
`;

export const InputRight = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: none;
  border-radius: 16px;
`;

export const Search = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  color: #0008;
  align-items: center;
  justify-content: center;
`;
