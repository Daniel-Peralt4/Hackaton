import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import CrearProyecto from "./Pages/CrearProyecto";
import Tareas from "./Pages/Tareas";
import { AuthProvider } from "./AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Proyecto" element={<CrearProyecto />} />
        <Route path="/Tareas" element={<Tareas />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
