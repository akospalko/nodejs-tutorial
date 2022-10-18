// middleware to dummy authorize user
const authorize = (req, res, next) => {
  const { user } = req.query; 
  if(user === 'johnny') {
    req.user = {name: 'johnny', id: 5}
    next();
  } else {
    res.status(404).send('unauthorized');
  }
}

module.exports = authorize;
