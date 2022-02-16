import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContents from "./components/MainContents";
import Store from "./pages/Store/Store";
import CallMainContents from "./components/CallMainContents";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Store />} /> */}
        <Route path="/" element={<CallMainContents />} />
      </Routes>
    </Router>
  );
}

export default App;
