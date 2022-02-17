import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Store from "./pages/Store/Store";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Store />} /> */}
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
