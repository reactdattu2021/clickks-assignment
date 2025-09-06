const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hashed], function(err) {
    if (err) return res.status(400).json({ error: 'User already exists' });
    req.session.userId = this.lastID;
    res.json({ message: 'Registered successfully' });
  });
});



router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });

    req.session.userId = user.id;
    res.json({ message: 'Logged in successfully' });
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.json({ message: 'Logged out' });
});

// router.get('/dashboard', (req, res) => {
//   if (!req.session.userId) return res.status(401).json({ error: 'Unauthorized' });
//   res.json({ message: 'Welcome to your dashboard!' });
// });

module.exports = router;