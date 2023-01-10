const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');

const users = [
  {username: 'Carolina' , email: "clvivas77@gmail.com" , password: "1234"},
  {username: 'Veronica' , email: "vero@gmail.com" , password: "4321"},
  {username: 'Antonio' , email: "arrm@gmail.com" , password: "9876"}
];
const todos = [
  {title: 'Tarea 1', description: 'Crear Tarea', userId: 1},
  {title: 'Tarea 2', description: 'Tarea 2', userId: 2},
  {title: 'Tarea 3', description: 'Crear Tarea Imposible', userId: 3},
  {title: 'Tarea 4', description: 'Empezar Tarea 3', userId: 1},
  {title: 'Tarea incompleta', userId: 3}
];
//const categories = [];
//const todosCategories = [];

db.sync({force: true})
  .then(() => {console.log("Iniciando informacion"); 
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    todos.forEach((todo) => Todos.create(todo));
  }, 100);
})
.catch((error) => console.log(error));