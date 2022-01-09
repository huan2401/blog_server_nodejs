const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const router = require('./resource/routers');
const db = require('./config/connectDB');

//kết nối database
db.connect();

//setup static file
app.use(express.static(path.join(__dirname, 'public')));

//config router
router(app);

//setup template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resource/views'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})