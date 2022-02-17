import styled from "styled-components";

export const StyledMain = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px;

  grid-template-columns: 1fr 1fr 1fr;

  gap: 10px;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  grid-template-rows: 20fr 50fr 30fr;
`;
