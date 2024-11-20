import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectForm() {
  const [project, setProject] = useState({
    id: 1,
    name: "Sistema de Gestión Ambiental",
    description: "Desarrollo de un sistema para monitoreo y control ambiental en el campus universitario",
    status: "En Progreso",
    leader: "Dr. María González",
    members: ["Juan Pérez", "Ana Rodríguez", "Carlos Martínez"],
    deadline: "2024-04-15",
    progress: 75,
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
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "10px" }}>
      <h1>Crear Proyecto</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
        <label>Facultad:</label>
        <select
          name="faculty"
          value={project.faculty}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px" }}
        >
          <option value="">Selecciona una facultad</option>
          {Object.keys(ProgramasPorFacultad).map((faculty) => (
            <option key={faculty} value={faculty}>
              {faculty}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Programa:</label>
        <select
          name="program"
          value={project.program}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px" }}
          disabled={!project.faculty} // Deshabilitar si no hay facultad seleccionada
        >
          <option value="">Selecciona un programa</option>
          {project.faculty &&
            ProgramasPorFacultad[project.faculty]?.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
        </select>
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
          <label>Estado:</label>
          <select
            name="status"
            value={project.status}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="En Progreso">En Progreso</option>
            <option value="Completado">Completado</option>
            <option value="Pendiente">Pendiente</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
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
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Fecha límite:</label>
          <input
            type="date"
            name="deadline"
            value={project.deadline}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", background: "#007BFF", color: "#FFF", borderRadius: "8px", border: "none", cursor: "pointer", marginRight: "8px" }}>
          Guardar
        </button>
        <button type="submit" style={{ padding: "10px 20px", background: "#007BFF", color: "#FFF", borderRadius: "8px", border: "none", cursor: "pointer", marginLeft: "8px" }}>
          <Link to="/Dashboard" style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}}>
            Volver
          </Link>
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;