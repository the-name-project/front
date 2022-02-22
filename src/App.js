import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Store from "./pages/Store/Store";
import Join from "./pages/Join/Join";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
<<<<<<< HEAD
import Test from "./components/MainComponent/Footer/Test";
=======
import Login from "./pages/Login/Login";
>>>>>>> a0de6079f2a6fcbe6b631282e92fdf29a0a9fa08

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* <Route path="/" element={<Main />} /> */}
=======
>>>>>>> a0de6079f2a6fcbe6b631282e92fdf29a0a9fa08
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
