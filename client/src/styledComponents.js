import styled, { css } from "styled-components";

export const SearchBar = styled.div`
    width: 420px;
    margin: 0 auto;
`;


export const SearchInput = styled.input`
  width: 350px;
  height: 35px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0 10px;
  float: left;

`;

export const SearchButton = styled.button`
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: gray;
  float: right;
  display: inline-block;
  cursor: pointer;
  transition: 0.45s;
  border: 2px solid white;

  &:hover {
    // background-color: #5fb352;
    background-color: rgba(255, 179, 0, 1);
    border-color: rgba(255, 179, 0, 1);
    color: white;
  }
`;