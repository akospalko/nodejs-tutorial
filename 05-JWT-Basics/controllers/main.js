const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors/index');


const login = async (req, res) => {
  const { username, password } = req.body;
  if(!username || !password) {
    throw new BadRequestError('Provide a username and password');
  }
  //generate dummy id (current time usually provided by db) 
  const id = new Date().getTime();
  //create token (keep it as concise as you can to be more  )
  const token = jwt.sign(
    {id, username}, 
    process.env.JWT_VERIFY_SIGNATURE, 
    {expiresIn: '30d'});
  res.status(200).json({msg: 'User created', token });
}; 

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random()*100);
  res.status(200).json({
    msg: `Hey ${req.user.username}`, 
    secret: `Here is your secret lucky number: ${luckyNumber}`
  })
};

module.exports = {
  login, 
  dashboard
};