require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.get('/api/users', (req, res) => {
  res.json([{ username: 'sample_user' }]);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running...');
});
