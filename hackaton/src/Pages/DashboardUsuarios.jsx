import { useState } from "react"
import { Link } from "react-router-dom";
import {
  BookOpen,
  BarChart3,
  Layout,
  LogOut,
  FileText
} from "lucide-react"
import "../Styles/Aplication.css"
import Dashboard from "../Components/Dashboard"
import FormProyecto from "../Components/GestionProyectoUser"
import ChatBot from "../Components/ChatBot"
import Graficas from "../Components/Graficas";
import Tareas from "../Components/Tareas";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-indigo-600 text-white px-6 py-4 nav">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-semibold">GestorPro</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">JP</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white h-[calc(100vh-4rem)] shadow-lg aside">
            <nav className="p-4 navbar">
              <ul className="space-y-2 ul">
                <li className="li">
                  <button
                    onClick={() => setActiveTab("Dashboard")}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg button ${
                      activeTab === "Dashboard"
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Layout className="h-5 w-5" />
                    <span className="span">Dashboard</span>
                  </button>
                </li>
                <li className="li">
                  <button
                    onClick={() => setActiveTab("FormProyecto")}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg button ${
                      activeTab === "FormProyecto"
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <BookOpen className="h-5 w-5" />
                    <span className="span">Proyectos</span>
                  </button>
                </li>
                {/* <li className="li">
                  <button
                    onClick={() => setActiveTab("team")}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg button ${
                      activeTab === "team"
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Users className="h-5 w-5" />
                    <span className="span">Equipo</span>
                  </button>
                </li>
                <li className="li">
                  <button
                    onClick={() => setActiveTab("calendar")}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg button ${
                      activeTab === "calendar"
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Calendar className="h-5 w-5" />
                    <span className="span">Calendario</span>
                  </button>
                </li> */}
                <li className="li">
                  <button
                    onClick={() => setActiveTab("Estadisticas")}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg button ${
                      activeTab === "Estadisticas"
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span className="span">Estadísticas</span>
                  </button>
                </li >
                <li className="li">
                  <button
                    onClick={() => setActiveTab("Tareas")}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg button ${
                      activeTab === "Tareas"
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <FileText className="h-5 w-5" />
                    <span className="span">Tareas</span>
                  </button>
                </li >
                <li className="li">
                  <Link
                    to="/Login"
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg button Link ${
                      activeTab === "Login"
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="span">Cerrar Sesion</span>
                  </Link>
                </li >
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 p-8">
            {activeTab === "Dashboard" && <Dashboard />}
            {activeTab === "FormProyecto" && <FormProyecto />}
            {activeTab === "Estadisticas" && <Graficas />}
            {activeTab === "Tareas" && <Tareas />}
          </main>
        </div>
      </div>
      
      <ChatBot />
    </>
  )
}

export default App
