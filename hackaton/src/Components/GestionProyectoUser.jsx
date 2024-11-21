import React, { useState, useEffect } from "react";
import { Plus, Search, Filter } from "lucide-react";
import "../Styles/GestionProyecto.css";
import { Link } from "react-router-dom";
import axios from "axios";

const GestionProyecto = () => {
  const [searchText, setSearchText] = useState(''); // Texto del filtro
  const [projects, setProjects] = useState([]); // Proyectos obtenidos
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [objetivos, setObjetivos] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [estado, setEstado] = useState('');

  // Función para obtener proyectos desde el backend
  const fetchProjects = async (estado) => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = estado
        ? `http://localhost:4000/proyectos/${estado}` // Endpoint con filtro
        : `http://localhost:4000/proyectos`; // Endpoint para todos los proyectos
      const response = await axios.get(endpoint);
      setProjects(response.data); // Ajusta según el formato del backend
    } catch (err) {
      console.error("Error al obtener proyectos", err);
      setError("No se pudieron cargar los proyectos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // Efecto para llamar a la API cuando cambia el texto de búsqueda
  useEffect(() => {
    fetchProjects(searchText); // Llama al backend con o sin filtro
  }, [searchText]);

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Proyectos</h1>
          <button
            disabled
            style={{ cursor: "auto", backgroundColor: "#83beff" }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors botonProyecto"
          >
            <Plus className="h-5 w-5" />
            <span>Nuevo Proyecto</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar proyectos por estado..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 input"
            />
          </div>
          <button className="px-4 py-2 border rounded-lg flex items-center space-x-2 hover:bg-gray-50 boton">
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filtros</span>
          </button>
        </div>

        {/* Loading & Error Messages */}
        {loading && <p className="text-gray-500">Cargando proyectos...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.idproyectos}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {project.proyectos}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.estadoproyecto === "En Progreso"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.estadoproyecto}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">
                      <span style={{ fontWeight: "bold" }}>ID: </span>
                      {project.idproyectos}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              {searchText
                ? "No se encontraron proyectos con ese estado."
                : "No hay proyectos disponibles."}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default GestionProyecto;
