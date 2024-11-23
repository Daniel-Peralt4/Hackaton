import React, { useState, useEffect } from "react"
import { X, Plus, Trash2 } from "lucide-react"
import "../Styles/ProyectoForm.css"
import { Form } from "react-router-dom";

const ProyectoForm = ({ onClose, onSubmit, project }) => {
  const [formData, setformData] = useState({
    title: "",
    description: "",
    objetivo: "",
    FechaInicio: "",
    FechaFin: "",
    EstadoProyecto: "",
    Facultad: "",
    Programa: "",
  });

  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    if (project) {
      setformData({
        ...project
      })
      if (project.teamMembers) {
        setTeamMembers(project.teamMembers)
      }
    }
  }, [project])

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ ...formData, teamMembers })
    onClose()
  }

  const handleChange = e => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAddTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", role: "", email: "" }])
  }

  const handleRemoveTeamMember = index => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index))
  }

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = teamMembers.map((member, i) => {
      if (i === index) {
        return { ...member, [field]: value }
      }
      return member
    })
    setTeamMembers(updatedMembers)
  }

  const ProgramasPorFacultad = {
    "Facultad de Ingenierías y Tecnologías": [
      "Ingeniería de Sistemas",
      "Ingeniería Electrónica",
      "Ingeniería Agroindustrial",
      "Ingeniería Ambiental y Sanitaria",
    ],
    "Facultad de Ciencias de la Salud": ["Enfermería", "Instrumentación Quirúrgica"],
    "Facultad de Ciencias Básicas": ["Microbiología"],
    "Facultad de Ciencias Administrativas, Contables y Económicas": [
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
    "Facultad de Educación": [
      "Licenciatura en Ciencias Naturales y Educación Ambiental",
      "Licenciatura en Literatura y Lengua Castellana",
      "Licenciatura en Matemáticas",
      "Licenciatura en Español e Inglés",
      "Licenciatura en Educación Física, Recreación y Deporte",
    ],
  };

  const roles = [
    "Director de Programa",
    "Líder de Proyecto",
    "Investigador Principal",
    "Co-investigador",
    "Asistente de Investigación",
    "Docente Guía",
    "Estudiante Colaborador"
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-height-90vh overflow-y-auto padding-modal">
        <div className="flex justify-between items-center p-1 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-semibold">
            {project ? "Editar Proyecto" : "Nuevo Proyecto"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 x"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={formData.title}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <textarea
                  className="form-textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Objetivo
              </label>
              <textarea
                  className="form-textarea"
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Facultad
              </label>
              <select
                className="form-select"
                name="Facultad"
                value={formData.Facultad}
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Programa
            </label>
            <select
                className="form-select"
                name="Programa"
                value={formData.Programa}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
                disabled={!formData.Facultad} // Deshabilitar si no hay facultad seleccionada
              >
                <option value="">Selecciona un programa</option>
                {formData.Facultad &&
                  ProgramasPorFacultad[formData.Facultad]?.map((Programa) => (
                    <option key={Programa} value={Programa}>
                      {Programa}
                    </option>
                  ))}
              </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <select
                  className="form-select"
                  name="EstadoProyecto"
                  value={formData.EstadoProyecto}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                >
                  <option value="Seleccion">Selecciona un estado</option>
                  <option value="En Progreso">En Progreso</option>
                  <option value="Completado">Completado</option>
                  <option value="Pendiente">Pendiente</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de inicio
            </label>
            <input
                  className="form-input"
                  type="date"
                  name="deadline"
                  value={formData.FechaInicio}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de finalizacion
            </label>
            <input
                  className="form-input"
                  type="date"
                  name="deadline"
                  value={formData.FechaFin}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
          </div>

          {/* {project && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Estado
              </label>
              <select
                name="status"
                value={formData.status}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              >
                <option value="Planificación">Planificación</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
                <option value="Retrasado">Retrasado</option>
              </select>
            </div>
          )} */}

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Miembros del Equipo
              </label>
              <button
                type="button"
                onClick={handleAddTeamMember}
                className="flex items-center space-x-2 text-sm text-indigo-600 hover:text-indigo-700 btnagg"
              >
                <Plus className="h-4 w-4" />
                <span>Añadir Miembro</span>
              </button>
            </div>

            <div className="space-y-3 form-group">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg team-member-container"
                >
                  <div className="flex-1">
                    <div className="field-container">
                      <label className="block text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={e =>
                          handleTeamMemberChange(index, "name", e.target.value)
                        }
                        className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                        required
                        style={{ width: "100%", padding: "8px", margin: "0px" }}
                      />
                    </div>
                    <div className="field-container">
                      <label className="block text-sm font-medium text-gray-700 ">
                        Rol
                      </label>
                      <select
                        value={member.role}
                        onChange={e =>
                          handleTeamMemberChange(index, "role", e.target.value)
                        }
                        className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                        required
                        style={{ width: "100%", padding: "8px" }}
                      >
                        <option value="">Seleccionar Rol</option>
                        {roles.map(role => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="field-container">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        value={member.email}
                        onChange={e =>
                          handleTeamMemberChange(index, "email", e.target.value)
                        }
                        className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                        required
                        style={{ width: "100%", padding: "8px" }}
                      />
                    </div>
                    <div>
                    <button
                      type="button"
                      onClick={() => handleRemoveTeamMember(index)}
                      className="mt-6 text-red-500 hover:text-red-700 btnEliminar "
                    >
                    Eliminar <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  </div>
                  
                </div>                
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 btncancelar"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 btnproyecto"
            >
              {project ? "Actualizar Proyecto" : "Crear Proyecto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProyectoForm
