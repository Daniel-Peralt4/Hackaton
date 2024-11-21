import { useState } from "react";
import { useAuth } from "../AuthProvider.jsx";
import "../Styles/Login.css";
//import user from "../Images/user.svg";
//import lock from "../Images/lock.svg";

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [mensaje, setMensaje] = useState("");
    const auth = useAuth();

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
            try {
                auth.loginAction(input);
            } catch (error) {
                setMensaje(error.message);
            }
            return;
        }

        alert("El usuario y la contraseña es obligatorio");
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    return (
        <>
        <body className="bodylsogin">
            <div className="general">
                <div className="error-message">{mensaje}</div>
                    <div className="login">
                        <form onSubmit={handleSubmitEvent}>
                            <h1>GestorPro</h1>
                            <div className="form_control">
                                <label htmlFor="user-name" className="label">Usuario:</label>
                                <input
                                    type="text"
                                    id="user-name"
                                    name="username"
                                    className="input"
                                    placeholder="Nombre de usuario"
                                    aria-describedby="user-name"
                                    aria-invalid="false"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form_control">
                                <label htmlFor="password" className="label">Contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="input"
                                    name="password"
                                    placeholder="Contraseña"
                                    aria-describedby="user-password"
                                    aria-invalid="false"
                                    onChange={handleInput}
                                />
                            </div>
                            <br/>
                            <button className="btn-submit">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </body>
        </>
        
    );
};
export default Login;