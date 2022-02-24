import { useState } from "react";
import { StyledContent } from "./StyledContent";
import CallMainContents from "./CallMainContents";
const Content = ({ CheckScoreOrder ,setCheckScoreOrder}) => {
  return (
    <>
      <StyledContent>
        <CallMainContents CheckScoreOrder={CheckScoreOrder} setCheckScoreOrder={setCheckScoreOrder} />
      </StyledContent>
    </>
  );
};

export default Content;
