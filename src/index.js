const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

//setup static file
app.use(express.static(path.join(__dirname, 'public')));

// Require router
const router = require(path.join(__dirname, 'resource/routers/routers'));
// Dùng userRoute cho tất cả các route bắt đầu bằng </users<
app.use('/', router);

//setup template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resource/views'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})