import React, { useState } from "react";
import { Link } from "react-router-dom";
import GestionRoles from "../Components/GestionRoles"
import "../Styles/CrearProyecto.css"
import { BookOpen } from "lucide-react";

function ProjectForm() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    objetivo: "",
    FechaInicio: "",
    FechaFin: "",
    EstadoProyecto: "",
    Facultad: "",
    Programa: "",
  });

  const ProgramasPorFacultad = {
    "Facultad de Ingenierías y Tecnologías": [
      "Ingeniería de Sistemas",
      "Ingeniería Electrónica",
      "Ingeniería Agroindustrial",
      "Ingeniería Ambiental y Sanitaria",
    ],
    "Facultad de Ciencias de la salud": [
      "Enfermería",
      "Instrumentación Quirúrgica",
    ],
    "Facultad de Ciencias Básicas": ["Microbiología"],
    "Facultad de Ciencias Administrativas, Contables y Ecnoómicas": [
      "Administración de Empresas",
      "Administración de Empresas Turísticas y Hoteleras",
      "Comercio Internacional",
      "Contaduría Pública",
      "Economía",
    ],
    "Facultad de Derecho, Ciencias Políticas y Sociales": [
      "Derecho",
      "Sociología",
      "Psicología",
    ],
    "Facultad de Bellas Artes": ["Licenciatura en Artes", "Música"],
    "Facultad de Educacion": [
      "Licenciatura en Ciencias Naturales y Educacion Ambiental",
      "Licenciatura en Literatura y Lengua Castellana",
      "Licenciatura en Matemáticas",
      "Licenciatura en Español e Inglés",
      "Licenciatura en Educación Física, Recreación y Deporte",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proyecto guardado:", project);
  };

  return (
    <>
            <div style={{margin: "0", padding:"0"}}>
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
            </div>

      <div className="CrearProyecto">
        <div style={{ alignItems: "center", margin:"0"}}>
          <h1>Crear Proyecto</h1>
          <div
            style={{
              maxHeight: "30rem",
              width: "60rem",
              overflowY: "auto",
              border: "2px solid #b6b3b3",
              borderRadius: "5px",
              padding: "5px",
            }}
            className="Proyecto"
          >
            <form className="formulario" onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label>Título:</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={project.title}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Descripción:</label>
                <textarea
                  className="form-textarea"
                  name="description"
                  value={project.description}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Objetivo:</label>
                <textarea
                  className="form-textarea"
                  name="objetivo"
                  value={project.objetivo}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
              <label>Facultad:</label>
              <select
                className="form-select"
                name="Facultad"
                value={project.Facultad}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              >
                <option value="">Selecciona una facultad</option>
                {Object.keys(ProgramasPorFacultad).map((Facultad) => (
                  <option key={Facultad} value={Facultad}>
                    {Facultad}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Programa:</label>
              <select
                className="form-select"
                name="Programa"
                value={project.Programa}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
                disabled={!project.Facultad} // Deshabilitar si no hay facultad seleccionada
              >
                <option value="">Selecciona un programa</option>
                {project.Facultad &&
                  ProgramasPorFacultad[project.Facultad]?.map((Programa) => (
                    <option key={Programa} value={Programa}>
                      {Programa}
                    </option>
                  ))}
              </select>
            </div>
              
              <div style={{ marginBottom: "15px" }}>
                <label>Estado:</label>
                <select
                  className="form-select"
                  name="EstadoProyecto"
                  value={project.EstadoProyecto}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                >
                  <option value="Seleccion">Selecciona un estado</option>
                  <option value="En Progreso">En Progreso</option>
                  <option value="Completado">Completado</option>
                  <option value="Pendiente">Pendiente</option>
                </select>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Fecha de Inicio:</label>
                <input
                  className="form-input"
                  type="date"
                  name="deadline"
                  value={project.FechaInicio}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Fecha límite:</label>
                <input
                  className="form-input"
                  type="date"
                  name="deadline"
                  value={project.FechaFin}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <GestionRoles />
              </div>
            </form>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit" style={{ padding: "10px 20px", background: "#007BFF", color: "#FFF", borderRadius: "8px", border: "none", cursor: "pointer", marginRight: "8px", marginTop: "15px" }}>
                  Guardar
                </button>
                <button type="submit" style={{ padding: "10px 20px", background: "#007BFF", color: "#FFF", borderRadius: "8px", border: "none", cursor: "pointer", marginLeft: "8px", marginTop: "15px" }}>
                  <Link to="/Dashboard" style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}}>
                    Volver
                  </Link>
                </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectForm;