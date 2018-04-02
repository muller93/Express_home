let express = require('express');
let app = express();

app.get('/:id', (req, res) => {
  res.send('The id you specified is ' + req.params.id);
});

app.post('/hello', (req, res) => {
  res.send('You just called the post method at');
});

app.listen(3000);
