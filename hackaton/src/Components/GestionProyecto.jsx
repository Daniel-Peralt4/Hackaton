import React from "react"
import { Plus, Search, Filter } from "lucide-react"
import "../Styles/GestionProyecto.css"
import {useNavigate, Link } from "react-router-dom";

const GestionProyecto = ({onNavigate}) => {
  const navigate = useNavigate();

  const btnTareas = () => {
    onNavigate("Tareas");
  };

  const projects = [
    {
      id: 1,
      name: "Sistema de Gestión Ambiental",
      description:
        "Desarrollo de un sistema para monitoreo y control ambiental en el campus universitario",
      Objetivo: "En Progreso",
      Programa: "En Progreso",
      status: "En Progreso",
      leader: "Dr. María González",
      members: ["Juan Pérez", "Ana Rodríguez", "Carlos Martínez"],
      FechaInicio: "2024-04-10",
      FechaFin: "2024-04-15",
      progress: 75
    },
    {
      id: 2,
      name: "Plataforma E-learning",
      description:
        "Implementación de sistema de aprendizaje virtual para la facultad de ingeniería",
      status: "Planificación",
      leader: "Dra. Laura Benítez",
      members: ["Pedro Sánchez", "María Torres"],
      FechaInicio: "2024-05-10",
      FechaFin: "2024-05-20",
      progress: 45
    }
  ]

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Proyectos</h1>
          <button  className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors botonProyecto">
            <Link to="/Proyecto" style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}}>
              <Plus className="h-5 w-5" />
              <span>Nuevo Proyecto</span>
            </Link>
          </button>
        </div>


         {/* Search and Filter */}
         <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 input"
            />
          </div>
          <button className="px-4 py-2 border  rounded-lg flex items-center space-x-2 hover:bg-gray-50 boton">
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filtros</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "En Progreso"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    <span style={{fontWeight: "bold"}}>Descripción: </span>
                    {project.description}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    <span style={{fontWeight: "bold"}}>Objetivo: </span>
                    {project.Objetivo}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 text-sm">
                    <span style={{fontWeight: "bold"}}>Programa: </span>
                    {project.Programa}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progreso</span>
                    <span className="text-gray-700 font-medium">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Líder del Proyecto</p>
                  <div className="flex items-center space-x-2">
                    
                    <span className="text-sm font-medium text-gray-700">
                      {project.leader}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Equipo</p>
                  <div className="flex -space-x-2">
                    {project.members.map((member, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 ring-2 ring-white"
                        title={member}
                      >
                        {member
                          .split(" ")
                          .map(n => n[0])
                          .join("")}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100" style={{padding: "0"}}>
                  <hr style={{color:"#48474d077"}} />
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fecha Inicio</span>
                    <span className="text-gray-700 font-medium">
                      {new Date(project.FechaInicio).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100" style={{padding: "0"}}>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fecha límite</span>
                    <span className="text-gray-700 font-medium">
                      {new Date(project.FechaFin).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <button onClick={btnTareas} className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors btnTareas" style={{cursor: "pointer"}}>
                      Ver Tareas
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
          
    </>
  )
}

export default GestionProyecto
