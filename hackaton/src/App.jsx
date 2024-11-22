import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import CrearProyecto from "./Pages/CrearProyecto";
// import Tareas from "./Pages/Tareas";
import { AuthProvider } from "./AuthProvider";
import DashboardUser from "./Pages/DashboardUsuarios";
import TareasUser from "./Pages/TareasUser"
import GestionProyecto from "./Components/GestionProyecto"
import Tareas from "./Components/TareasUser"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          {/* <Route path="GestionProyectos" element={<GestionProyecto />} />
          <Route path="Tareas" element={<Tareas />} /> */}
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Proyecto" element={<CrearProyecto />} />
        {/* <Route path="/Tareas" element={<Tareas />} /> */}
        <Route path="/DashboardUser" element={<DashboardUser />} />
        <Route path="/TareasUser" element={<TareasUser />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
