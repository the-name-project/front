import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/Store/Store";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/store/:storeId" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
