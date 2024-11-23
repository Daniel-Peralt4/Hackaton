import React from "react";
import {useState } from "react";
import "../Styles/Tareas.css"
import { useNavigate } from "react-router-dom";

const Tareas = ( {onNavigate} ) => {
    const navigate = useNavigate(); 
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

    const updateTaskStatus = (index, newStatus) => {
        setTasks({
            ...tasks,
            [currentPhase]: tasks[currentPhase].map((task, i) =>
                i === index ? { ...task, status: newStatus } : task
            ),
        });
    };

    const Volver = () => {
        onNavigate("GestionProyecto");
      };

    return (
        <>
            {/* <div className="tareas-container"> */}
                <h1 className="tareas-proyecto-nombre">Proyecto: </h1>
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
                        <button onClick={Volver} className="tareas-boton-agregar" style={{marginLeft: "10px"}}>
                            Ir a Proyectos
                        </button>                     
                </div>

                <div className="tareas-lista">
                    <h3>Lista de Tareas en {currentPhase}</h3>
                    {tasks[currentPhase].length > 0 ? (
                        <ul className="tareas-ul">
                            {tasks[currentPhase].map((task, index) => (
                                <li key={index} className="tareas-item">
                                    <div className="tareas-contenido">
                                        <div>
                                            <strong className="tareas-titulo">{task.title}</strong>
                                            <p className="tareas-descripcion">{task.description}</p>
                                        </div>
                                        <select
                                            value={task.status}
                                            onChange={(e) => updateTaskStatus(index, e.target.value)}
                                            className="tareas-select-estado"
                                        >
                                            <option value="Pendiente">Pendiente</option>
                                            <option value="En progreso">En progreso</option>
                                            <option value="Completada">Completada</option>
                                        </select>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="tareas-no-encontradas">
                            No hay tareas asignadas en esta fase.
                        </p>
                    )}
                </div>
            {/* </div> */}
        </>
    );
}

export default Tareas;