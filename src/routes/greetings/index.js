const express = require('express');

const router = express.Router();
const greetingsApi = require('../../controllers/greetings');

// APIs routes
router.get('/', greetingsApi.getGreetings);
router.post('/', greetingsApi.newGreeting);

module.exports = router;
