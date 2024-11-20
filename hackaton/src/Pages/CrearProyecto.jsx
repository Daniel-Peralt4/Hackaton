import React, { useState } from "react"

const CrearProyecto = () => {
  const [formData, setFormData] = useState({
    name: "",
    leader: "",
    deadline: ""
  })

  const [submittedData, setSubmittedData] = useState(null) // Para mostrar el resultado

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData) // Guarda la información ingresada
    setFormData({ name: "", leader: "", deadline: "" }) // Reinicia el formulario
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
            type="reset"
            onClick={() => setFormData({ name: "", leader: "", deadline: "" })}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300"
          >
            Reiniciar
          </button>
          <button
            type="submit"
            className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
          >
            Guardar
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-white shadow rounded-lg border w-80">
          <h3 className="text-lg font-bold text-gray-800">Proyecto Guardado</h3>
          <p className="text-sm text-gray-600">Nombre: {submittedData.name}</p>
          <p className="text-sm text-gray-600">Líder: {submittedData.leader}</p>
          <p className="text-sm text-gray-600">Fecha límite: {submittedData.deadline}</p>
        </div>
      )}
    </div>
  )
}

export default CrearProyecto
