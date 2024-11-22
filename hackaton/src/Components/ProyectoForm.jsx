import React, { useState, useEffect } from "react"
import { X, Plus, Trash2 } from "lucide-react"
import "../Styles/CrearProyecto.css"

const ProyectoForm = ({ onClose, onSubmit, project }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    faculty: "",
    program: "",
    status: "Planificación",
    leader: "",
    guide: "",
    startDate: "",
    endDate: "",
    objectives: ""
  })

  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    if (project) {
      setFormData({
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
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

  const programs = {
    Ingeniería: [
      "Ingeniería de Sistemas",
      "Ingeniería Civil",
      "Ingeniería Ambiental"
    ],
    Ciencias: ["Biología", "Química", "Física"],
    Humanidades: ["Psicología", "Sociología", "Historia"]
  }

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
      <div className="bg-white rounded-lg w-full max-w-2xl max-height-90vh overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-semibold">
            {project ? "Editar Proyecto" : "Nuevo Proyecto"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre del Proyecto
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Facultad
              </label>
              <select
                name="faculty"
                value={formData.faculty}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              >
                <option value="">Seleccionar Facultad</option>
                {Object.keys(programs).map(faculty => (
                  <option key={faculty} value={faculty}>
                    {faculty}
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
              name="program"
              value={formData.program}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={handleChange}
            >
              <option value="">Seleccionar Programa</option>
              {formData.faculty &&
                programs[formData.faculty].map(program => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              name="description"
              value={formData.description}
              rows={3}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Objetivos
            </label>
            <textarea
              name="objectives"
              value={formData.objectives}
              rows={2}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {project && (
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
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fecha de Inicio
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fecha de Finalización
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Miembros del Equipo
              </label>
              <button
                type="button"
                onClick={handleAddTeamMember}
                className="flex items-center space-x-2 text-sm text-indigo-600 hover:text-indigo-700"
              >
                <Plus className="h-4 w-4" />
                <span>Añadir Miembro</span>
              </button>
            </div>

            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg"
                >
                  <div className="grid grid-cols-3 gap-3 flex-1">
                    <div>
                      <label className="block text-xs font-medium text-gray-500">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={e =>
                          handleTeamMemberChange(index, "name", e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500">
                        Rol
                      </label>
                      <select
                        value={member.role}
                        onChange={e =>
                          handleTeamMemberChange(index, "role", e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                        required
                      >
                        <option value="">Seleccionar Rol</option>
                        {roles.map(role => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500">
                        Email
                      </label>
                      <input
                        type="email"
                        value={member.email}
                        onChange={e =>
                          handleTeamMemberChange(index, "email", e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveTeamMember(index)}
                    className="mt-6 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
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
