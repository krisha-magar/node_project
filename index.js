const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.json({
      message: 'Hello World'
    });
});

app.get('/profile',(req, res) => {
    res.send('This is profile page')
});
 
app.listen(3000);