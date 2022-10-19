//outsorced routes with the root of '/people/api/'
const express = require('express');
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers/people');
const router = express.Router();

//syntax1 - using .route('routPath')
// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman/', createPersonPostman); //testing out postman api tester
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

//syntax2 - using router.route('routPath') + chaining
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;