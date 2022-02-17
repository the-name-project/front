import Header from "../../components/MainComponent/Header/Header";
import Content from "../../components/MainComponent/Content/Content";
import Footer from "../../components/MainComponent/Footer/Footer";
import { StyledMain } from "./StyledMain";

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Content />
      <Footer />
    </StyledMain>
  );
};
export default Main;
