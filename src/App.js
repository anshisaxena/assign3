import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Details />} />

      </Routes>
    </Router>
  );
};

export default App;
