import React, { useState } from "react";
import {
    Plus, Minus
  } from "lucide-react"

const DynamicForm = () => {
  const [fields, setFields] = useState([{ name: "", role: "" }]);

  const handleAddFields = () => {
    setFields([...fields, { name: "", role: "" }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleRemoveLastField = () => {
    if (fields.length > 1) {
      setFields(fields.slice(0, -1)); // Elimina el último campo
    }
  };

  return (
    <div style={{ margin: "0 auto" }}>
      {fields.map((field, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            // borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
            
          <label style={{ display: "block", marginBottom: "5px" }}>
            Nombre:
            </label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={field.name}
              onChange={(e) => handleInputChange(index, e)}
              style={{ padding: "8px", width: "100%" }}
            />
          
          <label style={{ display: "block", marginTop: "5px" }}>
            Rol:
            </label>
            <select
              className="form-select"
              name="role"
              value={field.role}
              onChange={(e) => handleInputChange(index, e)}
              style={{padding: "5px", width: "100%"}}
            >
              <option value="">Selecciona un rol</option>
              <option value="Director">Director de Programa</option>
              <option value="Lider">Lider de Proyecto</option>
              <option value="Colaborador">Colaborador</option>
              <option value="Guia">Docente Guía</option>
            </select>
        </div>
      ))}
      
      <div style={{ marginTop: "10px" }}>
                <button
                type="button"
                onClick={handleAddFields}
                style={{
                    padding: "10px 15px",
                    backgroundColor: "#76abe5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                }}
                >
                <Plus size={12} />
                </button>
                <button
                type="button"
                onClick={handleRemoveLastField}
                style={{
                    padding: "10px 15px",
                    backgroundColor: "#e67a7a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                disabled={fields.length === 1} // Desactiva si hay un solo campo
                >
                <Minus size={12} style={{fontWeight: "600"}} />
                </button>
            </div>

    </div>
  );
};

export default DynamicForm;