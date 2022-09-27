import ValidationService from '../service/validationService.js'

class StudentsController {
  static rotas(app){
    app.get("/estudantes", () => {});

    app.post("/estudantes", () => {});

    app.put("/estudantes/:parametro", () => {});

    app.delete("/estudantes/:parametro", () => {});
  }

};

export default StudentsController;