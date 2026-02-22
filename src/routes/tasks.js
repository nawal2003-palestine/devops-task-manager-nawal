const express = require('express');
const router = express.Router();

// Move tasks data here
const tasks = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Practice DevOps", completed: true }
];

// IMPORTANT: Route is now '/' not '/tasks'
// Because we'll mount this router at '/tasks' in app.js
router.get('/', (req, res) => {
  res.json(tasks);
});

// Export the router
module.exports = router;