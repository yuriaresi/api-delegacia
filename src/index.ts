import express from "express";
import cors from 'cors';
import { CriminosoController } from "./controllers/criminoso.controller";
import { CrimeController } from "./controllers/crime.controller";
const criminosoController = new CriminosoController()
const crimeController = new CrimeController()


const app = express();
app.use(express.json());
app.use(cors());


app.post('/criminoso', criminosoController.cadastrarCriminoso)

app.get('/criminoso', criminosoController.listarCriminosos)

app.get('/criminoso/:id', criminosoController.buscarCriminoso)


// crime

app.post('/criminoso/:id/crime', crimeController.CadastrarCrime)

app.get('/crime', crimeController.ListarCrimes)


app.listen(3333, () => {
   console.log("A API está rodando!- http://localhost:3333");
});