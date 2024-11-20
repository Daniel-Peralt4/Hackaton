import React, { useState } from "react"

const ProyectoForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    leader: "",
    deadline: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-3 bg-white shadow-lg rounded-lg border w-80"
    >
      <h2 className="text-lg font-bold text-gray-800 text-center">Nuevo Proyecto</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-2 py-1 border rounded-lg text-sm"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Líder</label>
        <input
          type="text"
          name="leader"
          value={formData.leader}
          onChange={handleChange}
          className="w-full px-2 py-1 border rounded-lg text-sm"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha límite</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full px-2 py-1 border rounded-lg text-sm"
          required
        />
      </div>
      
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
        >
          Guardar
        </button>
      </div>
    </form>
  )
}

export default ProyectoForm
