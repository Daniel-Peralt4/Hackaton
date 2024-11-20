import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Crear el contexto
const AuthContext = createContext();

// Componente AuthProvider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    
    // Acción para iniciar sesión
    const loginAction = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/auth/login', data);

            const { usuario } = response.data;
            setUser(usuario.usuario);
            setToken(usuario.contraseña);
            localStorage.setItem("site", usuario.contraseña);

            if (usuario.idrol === 2) {
                navigate("/Dashboard_admin");
            } else {
                navigate("/Dashboard");
            }
        } catch (error) {
            alert("Usuario o contraseña incorrectos");
        }
    };

    // Acción para cerrar sesión
    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/"); // Redirige al usuario al inicio de sesión
    };
    
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado
export const useAuth = () => {
    return useContext(AuthContext);
};
