import React, { useState } from "react"
import {
  Bell,
  BookOpen,
  Users,
  Calendar,
  BarChart3,
  Layout
} from "lucide-react"
import Dashboard from "./components/Dashboard"
import ProjectList from "./components/ProjectList"
import Notifications from "./components/Notifications"

function App() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-semibold">AcademiaPro</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-indigo-700 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">JP</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-[calc(100vh-4rem)] shadow-lg">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === "dashboard"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Layout className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === "projects"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Proyectos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("team")}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === "team"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>Equipo</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("calendar")}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === "calendar"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Calendario</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("stats")}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === "stats"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Estadísticas</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "projects" && <ProjectList />}
          {activeTab === "notifications" && <Notifications />}
        </main>
      </div>
    </div>
  )
}

export default App
