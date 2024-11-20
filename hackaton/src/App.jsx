import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;