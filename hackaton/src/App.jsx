import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { AuthProvider } from "./AuthProvider";
import DashboardUser from "./Pages/DashboardUsuarios";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/DashboardUser" element={<DashboardUser />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
