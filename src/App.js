import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Store from "./pages/Store/Store";
import Main from "./pages/Main/Main";
import Mypage from "./pages/Mypage/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        z
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/store/:storeId" element={<Store />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
