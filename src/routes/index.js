const express = require('express');

const router = express.Router();
const greetingsRoutes = require('./greetings');

// Greetings routes
router.use('/greetings', greetingsRoutes);


// Not found route
router.use((req, res) => res.status(404).send('Route not found'));


// Error handling route
router.use((err, req, res, _next) => {
  const status = err.status || 500;
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : {};

  res.status(status).json({
    status,
    error: err.message,
    stack,
  });
});

module.exports = router;
