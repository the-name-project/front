import Header from "../../components/MainComponent/Header/Header";
import Content from "../../components/MainComponent/Content/Content";
import Footer from "../../components/MainComponent/Footer/Footer";
import { StyledMain } from "./StyledMain";
import { useState } from "react";

const Main = () => {
  const [CheckScoreOrder, setCheckScoreOrder] = useState(0); // 0이면 선택안함 , 1이면 네이버, 2면 카카오

  return (
    <StyledMain>
      <Header CheckScoreOrder={CheckScoreOrder} setCheckScoreOrder={setCheckScoreOrder} />
      <Content CheckScoreOrder={CheckScoreOrder} setCheckScoreOrder={setCheckScoreOrder}/>
      <Footer />
    </StyledMain>
  );
};
export default Main;
