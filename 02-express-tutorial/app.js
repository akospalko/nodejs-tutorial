const express = require('express');
let { people } = require('./data');

const app = express();

//load static assets
app.use(express.static('./methods-public'))
//parse form data (name value)
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())

//get (read) data
app.get('/api/people', (req, res) => {
  res.status(200).json({success: true, data: people });
})

//post data
app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})


//testing out postman api tester
app.post('/api/postman/people', (req, res)=> {
  const { name } = req.body;
  if(!name) {
    return res.status(400).json({success: false, msg: 'provide name value'})
  }
  res.status(201).send({success:true, data: [...people, {name, id: 6}]})
}) 

app.post('/login', (req, res) => {
  const { name } = req.body   // [Object: null prototype] {name : 'InputName'} // store name value
  if(name) {
    return res.status(200).send(`welcome home ${name}`)
  }   
 res.status(401).send('please provide credentials')
})

//put (update) data
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  console.log(id, name);
  //find and store person by id
  const findPerson = people.find((person) => {return person.id === Number(id)})
  if(!findPerson) {
    return res
      .status(404)
      .json({success: false, msg: `there is no user with this id: ${id} `})
  }
  //update 'database' with the input obj (findPerson) 
  const updatedPeople =  people.map((person) => {
    if(person.id === Number(id)) { //if database id matches route param id 
      person.name = name; // update existing name value with new name value
    } 
    return person; //return obj w/o any change
  })
  res.status(200).json({success: true, data: updatedPeople}); 
})

//delete data
app.delete('/api/people/:id', (req, res) => {
  //get req data:
  const { id } = req.params

  if(id.length === 0) {
    res.json({success: false, msg: 'no id is provided'})
  }
  //check if id is in the 'db'
  const filteredPerson = people.find((person) => {return person.id === Number(id)}) // if target found, store obj
  if(!filteredPerson) { // if no target fokund, send back response
    return res
    .status(404)
    .json({success: false, msg: `no such id in the database: ${id}`})
  }
  //delete by filtering out unecessary obj 
  const filteredPeople = people.filter((person) => person.id != id);
  console.log(filteredPeople);
 
  res.status(200).json({success: true, data: filteredPeople})

})

//listener
app.listen(5000, () => {console.log('listening on port 5000...')})