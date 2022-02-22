import styled from "styled-components";

export const PageUl = styled.ul`
  float: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: #fee9b2;
  padding: 1px;
`;

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #f9fce1;
  }
  &:focus::after {
    color: white;
    background-color: #f9fce1;
  }
`;

export const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #f9fce1;
  }
`;

export const Div = styled.div`
  text-align: center;
  margin: 10px;
`;
