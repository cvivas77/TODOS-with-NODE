const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.models');

const users = [
  {username: 'Carolina' , email: "clvivas77@gmail.com" , password: "1234"},
  {username: 'Veronica' , email: "vero@gmail.com" , password: "4321"},
  {username: 'Antonio' , email: "arrm@gmail.com" , password: "9876"}
];
const todos = [
  {title: 'Estudiar node', description: 'Crear Tarea', user_id: 1},
  {title: 'Pasear al Perro', description: 'Tarea 2', user_id: 2},
  {title: 'Lavar los platos', description: 'Crear Tarea Imposible', user_id: 3},
  {title: 'Ir al medico', description: 'Empezar Tarea 3', user_id: 1},
  {title: 'Pagar los servicios', user_id: 3}
];
const categories = [
  {name: 'personal'}, //1
  {name: 'educacion'}, //2
  {name: 'salud'}, //3
  {name: 'trabajo'}, //4
  {name: 'hogar'}, //5
  {name: 'deporte'}, //6
  {name: 'ocio'}, //7
  {name: 'cocina'}, //8
  {name: 'financiero'}, //9
  {name: 'entretenimiento'}, //10
];


const todosCategories = [
  {categoryId: 1, todoId: 1},
  {categoryId: 2, todoId: 1},
  {categoryId: 4, todoId: 1},
  {categoryId: 1, todoId: 2},
  {categoryId: 5, todoId: 2},
  {categoryId: 10, todoId: 2},
  {categoryId: 5, todoId: 3},
  {categoryId: 8, todoId: 3},
  {categoryId: 1, todoId: 4},
  {categoryId: 3, todoId: 4},
  {categoryId: 9, todoId: 5},
  {categoryId: 1, todoId: 5},
];

db.sync({force: true})
  .then(() => {console.log("Iniciando informacion"); 
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    todos.forEach((todo) => Todos.create(todo));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 250);
  setTimeout(() => {
    todosCategories.forEach((todoCategories) => TodosCategories.create(todoCategories));
  }, 400);
})
.catch((error) => console.log(error));