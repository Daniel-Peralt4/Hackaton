const express = require("express");
const cors = require("cors");

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

app.listen(port, ()=>{
    console.log(`El servidor está corriendo en el puerto ${port}`);
})