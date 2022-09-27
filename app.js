import express from "express";
import StudentsController from './src/controller/studentsController.js'

const app = express();
const port = 3000;

app.listen(port, ()=>{console.log(`Servidor online no endereço http://localhost:${port}`)});

app.use(express.json());

StudentsController.rotas(app)