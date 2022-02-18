import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Store from "./pages/Store/Store";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
