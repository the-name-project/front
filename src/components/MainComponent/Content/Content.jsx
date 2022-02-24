import { useState } from "react";
import { StyledContent } from "./StyledContent";
import CallMainContents from "./CallMainContents";
const Content = ({ CheckScoreOrder, where }) => {
  return (
    <>
      <StyledContent>
        <CallMainContents CheckScoreOrder={CheckScoreOrder} where={where}/>
      </StyledContent>
    </>
  );
};

export default Content;
