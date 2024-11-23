import React, {useState} from "react"
import { Plus, Search, Filter, Edit2, Trash2 } from "lucide-react"
import { toast } from "react-hot-toast"
import "../Styles/GestionProyecto.css"
import {useNavigate} from "react-router-dom";
import ProyectoForm from "./ProyectoForm"

const GestionProyecto = ({onNavigate}) => {


  const btnTareas = () => {
    onNavigate("Tareas");
  };

    const [projects, setProjects] = useState([
      {
        id: 1,
        name: "Sistema de Gestión Ambiental",
        description:
          "Desarrollo de un sistema para monitoreo y control ambiental en el campus universitario",
        status: "En Progreso",
        faculty: "Ingeniería",
        program: "Ingeniería Ambiental",
        leader: "Dr. María González",
        members: ["Juan Pérez", "Ana Rodríguez", "Carlos Martínez"],
        teamMembers: [],
        deadline: "2024-04-15",
        progress: 75
      },
      {
        id: 2,
        name: "Plataforma E-learning",
        description:
          "Implementación de sistema de aprendizaje virtual para la facultad de ingeniería",
        status: "Planificación",
        faculty: "Ingeniería",
        program: "Ingeniería de Sistemas",
        leader: "Dra. Laura Benítez",
        members: ["Pedro Sánchez", "María Torres"],
        teamMembers: [],
        deadline: "2024-05-20",
        progress: 45
      }
    ])
  
    const [showForm, setShowForm] = useState(false)
    const [editingProject, setEditingProject] = useState(null)
    const [filters, setFilters] = useState({
      search: "",
      status: "",
      faculty: "",
      program: ""
    })
    const [showFilters, setShowFilters] = useState(false)
  
    const handleCreateProject = projectData => {
      const newProject = {
        id: projects.length + 1,
        ...projectData,
        status: "Planificación",
        progress: 0,
        members: projectData.teamMembers.map(member => member.name),
        teamMembers: projectData.teamMembers
      }
      setProjects([...projects, newProject])
      toast.success("Proyecto creado exitosamente")
    }
  
    const handleUpdateProject = projectData => {
      const updatedProjects = projects.map(project =>
        project.id === editingProject?.id
          ? {
              ...project,
              ...projectData,
              members: projectData.teamMembers.map(member => member.name),
              teamMembers: projectData.teamMembers
            }
          : project
      )
      setProjects(updatedProjects)
      setEditingProject(null)
      toast.success("Proyecto actualizado exitosamente")
    }
  
    const handleDeleteProject = id => {
      if (window.confirm("¿Está seguro de eliminar este proyecto?")) {
        setProjects(projects.filter(project => project.id !== id))
        toast.success("Proyecto eliminado exitosamente")
      }
    }
  
    const filteredProjects = projects.filter(project => {
      const matchesSearch =
        project.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase())
      const matchesStatus = !filters.status || project.status === filters.status
      const matchesFaculty =
        !filters.faculty || project.faculty === filters.faculty
      const matchesProgram =
        !filters.program || project.program === filters.program
  
      return matchesSearch && matchesStatus && matchesFaculty && matchesProgram
    })
  
    const uniqueStatuses = Array.from(new Set(projects.map(p => p.status)))
    const uniqueFaculties = Array.from(new Set(projects.map(p => p.faculty)))
    const uniquePrograms = Array.from(new Set(projects.map(p => p.program)))
    
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Proyectos</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors botonProyecto"
          >
            <Plus className="h-5 w-5" />
            <span>Nuevo Proyecto</span>
          </button>
        </div>
  
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={filters.search}
                onChange={e => setFilters({ ...filters, search: e.target.value })}
                className="w-fullfilter pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 input"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-50 boton"
            >
              <Filter className="h-5 w-5 text-gray-500" />
              <span>Filtros</span>
            </button>
          </div>
  
          {showFilters && (
            <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-sm filtros">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <select
                  value={filters.status}
                  onChange={e =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 select"
                >
                  <option value="">Todos</option>
                  {uniqueStatuses.map(status => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Facultad
                </label>
                <select
                  value={filters.faculty}
                  onChange={e =>
                    setFilters({ ...filters, faculty: e.target.value })
                  }
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 select"
                >
                  <option value="">Todas</option>
                  {uniqueFaculties.map(faculty => (
                    <option key={faculty} value={faculty}>
                      {faculty}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Programa
                </label>
                <select
                  value={filters.program}
                  onChange={e =>
                    setFilters({ ...filters, program: e.target.value })
                  }
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 select"
                >
                  <option value="">Todos</option>
                  {uniquePrograms.map(program => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4 proyectos">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="p-1 text-gray-400 hover:text-indigo-600 buttonedit"
                    >
                      <Edit2 className="h-4 w-4 edit" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-1 text-gray-400 hover:text-red-600 buttondelete"
                    >
                      <Trash2 className="h-4 w-4 delete" />
                    </button>
                  </div>
                </div>
  
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "En Progreso"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Planificación"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
  
                <p className="text-gray-600 text-sm">{project.description}</p>
                <span className="text-sm text-gray-500">{project.faculty}</span>
  
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
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-indigo-600">
                        {project.leader
                          .split(" ")
                          .map(n => n[0])
                          .join("")}
                      </span>
                    </div>
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
  
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fecha límite</span>
                    <span className="text-gray-700 font-medium">
                      {new Date(project.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <button onClick={btnTareas} className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors btnTareas">
                      Ver Tareas
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
  
        {(showForm || editingProject) && (
          <div className="modal-overlay">
            <div className="modal-content">
              <ProyectoForm
                onClose={() => {
                  setShowForm(false)
                  setEditingProject(null)
                }}
                onSubmit={editingProject ? handleUpdateProject : handleCreateProject}
                project={editingProject}
              />
            </div>
          </div>
        )}
      </div>
    )
  }

export default GestionProyecto