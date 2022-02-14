import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContents from "./components/MainContents";
import Store from "./pages/Store/Store";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Store />} /> */}
        <Route path="/" element={<MainContents />} />
      </Routes>
    </Router>
  );
}

export default App;
