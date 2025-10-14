// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Alap GET végpont
app.get('/', (req, res) => {
  res.json({
    message: 'Sikeresen működik a Node.js GET szerver 🚀',
    author: '93B8D2F1 projekt'
  });
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
