import express from "express";

const port = 3000;
const app = express();

app.get("/animes", (req, res) =>{
    res.send("Listagem de animes");
});

app.listen(port, () =>{
    console.log(`Servidor em execução na porta ${port}`);
});