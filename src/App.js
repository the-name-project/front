import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Store from "./pages/Store/Store";
import Join from "./pages/Join/Join";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Test from "./components/MainComponent/Footer/Test";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
