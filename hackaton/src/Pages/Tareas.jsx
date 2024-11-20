import { useState } from "react";
import "../Styles/Tareas.css"

const Tareas = () => {
    const [currentPhase, setCurrentPhase] = useState("Planificación");
    const [tasks, setTasks] = useState({
        Planificación: [],
        Desarrollo: [],
        Evaluación: [],
    });
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        status: "Pendiente",
    });

    const handlePhaseChange = (e) => {
        setCurrentPhase(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const addTask = () => {
        if (newTask.title.trim() && newTask.description.trim()) {
            setTasks({
                ...tasks,
                [currentPhase]: [...tasks[currentPhase], newTask],
            });
            setNewTask({ title: "", description: "", status: "Pendiente" });
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    return (
        <div className="tareas-container">
            <h1 className="tareas-proyecto-nombre">Proyecto:</h1>

            <div className="tareas-fase-selector">
                <label htmlFor="fase">Fase del proyecto:</label>
                <select
                    id="fase"
                    value={currentPhase}
                    onChange={handlePhaseChange}
                    className="tareas-select"
                >
                    <option value="Planificación">Planificación</option>
                    <option value="Desarrollo">Desarrollo</option>
                    <option value="Evaluación">Evaluación</option>
                </select>
            </div>

            <div className="tareas-agregar">
                <h3>Agregar Tarea a la Fase: {currentPhase}</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Título de la tarea"
                    value={newTask.title}
                    onChange={handleInputChange}
                    className="tareas-input"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Descripción de la tarea"
                    value={newTask.description}
                    onChange={handleInputChange}
                    className="tareas-input"
                />
                <button onClick={addTask} className="tareas-boton-agregar">
                    Agregar
                </button>
            </div>

            <div className="tareas-lista">
                <h3>Lista de Tareas en {currentPhase}</h3>
                {tasks[currentPhase].length > 0 ? (
                    <ul className="tareas-ul">
                        {tasks[currentPhase].map((task, index) => (
                            <li key={index} className="tareas-item">
                                <strong className="tareas-titulo">{task.title}</strong>
                                <p className="tareas-descripcion">{task.description}</p>
                                <span className="tareas-estado">
                                    Estado: <em>{task.status}</em>
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="tareas-no-encontradas">
                        No hay tareas asignadas en esta fase.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Tareas;

