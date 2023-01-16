const AuthService = require('../service/auth.service');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
  try {
    const {email, password} = req.body;
    const response = await AuthService.login(email, password);
    if(response.isValid) {
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id,
      };
      const token = jwt.sign(data, "", {algorithm: "HS512"});
      data.token = token;
      console.log(data);
      res.json(data);
    } else {
      res.status(400).json({message: 'Credenciales invalidas'});

    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {userLogin};