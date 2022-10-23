import styled from "styled-components";
// import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const SearchForm = styled.form`
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border-radius: 3px;
overflow: hidden;
`;
export const Button = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;