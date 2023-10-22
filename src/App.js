import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pay from "./Pay";
import Home from "./Home";
import Success from "./Success";
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    </Router>


  );
}

export default App;
