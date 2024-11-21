import React, { useState } from "react";
import { Link } from "react-router-dom";
import GestionRoles from "../Components/GestionRoles"
import "../Styles/CrearProyecto.css"

function ProjectForm() {
  const [project, setProject] = useState({
    title: "Sistema de Gestión Ambiental",
    description: "Desarrollo de un sistema para monitoreo y control ambiental en el campus universitario",
    objetivo: "En Progreso",
    FechaInicio: "Dr. María González",
    FechaFin: ["Juan Pérez", "Ana Rodríguez", "Carlos Martínez"],
    EstadoProyecto: "2024-04-15",
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
    <div className="CrearProyecto">
      <div style={{ alignItems: "center"}}>
        <h1>Crear Proyecto</h1>
        <div
          style={{
            maxHeight: "33rem",
            width: "60rem",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label>Título:</label>
              <input
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
                name="description"
                value={project.description}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Objetivo:</label>
              <textarea
                name="objetivo"
                value={project.objetivo}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
            <label>Facultad:</label>
            <select
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
                name="status"
                value={project.EstadoProyecto}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              >
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
                <option value="Pendiente">Pendiente</option>
              </select>
            </div>
            {/* <div style={{ marginBottom: "15px" }}>
              <label>Líder:</label>
              <input
                type="text"
                name="leader"
                value={project.leader}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Miembros:</label>
              <input
                type="text"
                name="members"
                value={project.members.join(", ")}
                onChange={(e) =>
                  setProject((prevProject) => ({
                    ...prevProject,
                    members: e.target.value.split(",").map((member) => member.trim()),
                  }))
                }
                style={{ width: "100%", padding: "8px" }}
              />
            </div> */}
            <div style={{ marginBottom: "15px" }}>
              <label>Fecha de Inicio:</label>
              <input
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
                type="date"
                name="deadline"
                value={project.FechaFin}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
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
  );
}

export default ProjectForm;