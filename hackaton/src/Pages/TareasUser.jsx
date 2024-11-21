import {useState } from "react";
import "../Styles/Tareas.css"
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Tareas = () => {
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

    const Cancelar = () => {
        navigate("/DashboardUser"); // Redirige a /Dashboard
    };

    return (
        <>
            <div style={{margin: "0", padding:"0"}}>
                <nav className="bg-indigo-600 text-white px-6 py-4 nav">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                        <BookOpen className="h-6 w-6" />
                        <span className="text-xl font-semibold">GestorPro</span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">JP</span>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        
            <div className="tareas-container">
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
                        <button disabled style={{cursor:"auto", backgroundColor: "#83beff"}} className="tareas-boton-agregar">
                            Agregar
                        </button>
                        <button onClick={Cancelar} className="tareas-boton-agregar" style={{marginLeft: "10px"}}>
                            Volver
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
            </div>
        </>
    );
};

export default Tareas;