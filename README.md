## API Rest -  Students

API criada para alimentar aplicação ReactJs, de acordo com o Challenge Week proposto pela Resília Educação.

## Link da API (hospedada na Heroku):

https://api-challenge-week-resilia.herokuapp.com/

## Tenologias ⚙: 

 -   VScode
 -   Postman
 -   GIT
 -   GitHub
 -   NODE.Js
 -   Javascript
 -   Express
 -   SqLite

 ## Para instalar o projeto na sua máquina:

 Clone esse repositório:

 ```
     git clone https://github.com/NodjaLima/challenge_week_resilia_backend.git
 ```

Acesse o diretório raiz usando o comando:

  ```
      cd backend_challenge_week_1
  ```  

Instale as dependencias:

  ```
      npm install
  ```    

Inicie o servidor:

  ```
      npm run dev
 ```

## Rotas e Metodos:

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **GET** | `/` | Retorna toda a tabela de students |
| **POST** | `/` | Popula a tabela students |
| **DELETE** | `/:id` | Deleta o student com o id informado no parametro  |

Modelo de requisição para o metódo POST:

``` 
  {
    "name_student": "Nome de um estudante",
    "class_student": "T00",
    "age_student": 00
    }
```

## Validações:

- Os valores correspondentes as chaves name_studente e class_student devem ser string e não podem estar vazios;
- Os valores correspondentes a chave age_student deve ser um número inteiro e não pode estar vazio.

## Status do projeto:

- Concluído

## 💻 Desenvolvedora:

 **Nodja Lima** - [NodjaLima](https://github.com/NodjaLima)



