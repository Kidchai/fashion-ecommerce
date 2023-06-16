import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import View from "./components/View";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<View />}></Route>
            <Route path="/add/:id" element={<Create />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
