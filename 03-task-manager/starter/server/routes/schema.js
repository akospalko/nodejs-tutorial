const express = require('express');
const router = express.Router();

const { getSchema } = require('../controllers/schema');

router.route('/').get(getSchema)

module.exports = router;
