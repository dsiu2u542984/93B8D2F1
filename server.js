
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.json({
    message: 'Sikeresen működik',
    author: '93B8D2F1 projekt'
  });
});


app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
