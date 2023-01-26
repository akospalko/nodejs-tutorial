const UnauthenticatedError = require('../errors/index');
const jwt = require('jsonwebtoken');


const authenticationMiddleware = async (req, res, next ) => {
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('No token is provided');
  } 
  //store token coming from client 
  const token = authHeader.split(' ')[1];


  try{
    const decoded = jwt.verify(token, process.env.JWT_VERIFY_SIGNATURE);
    const {id, username} = decoded; //destructure id, uname
    req.user = { id, username}; //set up user prop and pass it to the controller (dashboard)  
    next();
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
}

module.exports = authenticationMiddleware;