import React, { useState } from "react";

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
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
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
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Programa:</label>
          <input
            type="text"
            name="name"
            value={project.name}
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
        <button type="submit" style={{ padding: "10px 20px", background: "#007BFF", color: "#FFF", border: "none", cursor: "pointer" }}>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
