const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://clickks-assignment.vercel.app/",
  credentials: true
}));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));


app.use('/api', authRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));