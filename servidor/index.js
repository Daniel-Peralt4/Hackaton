const express = require("express");
const cors = require("cors");
const rolesRouter = require("./Routes/roles");
const usuariosRouter = require("./Routes/usuarios");
const proyectosRouter = require("./Routes/proyectos");
const facultadesRouter = require("./Routes/facultades");
const programasRouter = require("./Routes/programas");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) =>{
    res.send("El servidor está funcionando correctamente");
});

app.use("/roles", rolesRouter);
app.use("/usuarios", usuariosRouter);
app.use("/proyectos", proyectosRouter);
app.use("/facultades", facultadesRouter);
app.use("/programas", programasRouter);
app.use("/auth", usuariosRouter);

app.listen(port, ()=>{
    console.log(`El servidor está corriendo en el puerto ${port}`);
})