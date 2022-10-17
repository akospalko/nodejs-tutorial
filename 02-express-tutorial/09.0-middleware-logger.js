//middleware
//logs some basic data btw the in the res-req cycle
const logger = (req, res, next) => { //MWs have access to these params by default
  const {method, url} = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
}

module.exports = logger