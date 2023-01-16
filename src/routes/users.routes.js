const {Router} = require('express');
const {getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserWithTasks} = require('../controllers/users.controller');
const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/:id/task', getUserWithTasks);
  
router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);




module.exports = router;