const express = require('express')
const app = express()
const path = require('path');
const port = 3000

//setup template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resource/views'));

//setup static file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})