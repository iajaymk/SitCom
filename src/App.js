import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import { HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/mock-api" element={<Mockman colorScheme="dark"/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
