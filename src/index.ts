import express from "express";
import cors from 'cors';
import { CriminosoController } from "./controllers/criminoso.controller";
const criminosoController = new CriminosoController()


const app = express();
app.use(express.json());
app.use(cors());


app.post('/criminoso', criminosoController.cadastrarCriminoso)

app.get('/criminoso', criminosoController.listarCriminosos)

app.get('/criminoso/:id', criminosoController.buscarCriminoso)

app.listen(3333, () => {
   console.log("A API está rodando!- http://localhost:3333");
});