import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Store from "./pages/Store/Store";
import Join from "./pages/Join/Join";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Mypage from "./pages/Mypage/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store/:storeId" element={<Store />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
