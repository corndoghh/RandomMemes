const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname + '../public/css')));
app.use('/js', express.static(path.join(__dirname + '../public/js')));
app.use('/img', express.static(path.join(__dirname + '../public/img')));


app.set('views', path.join(__dirname, '../public/pages'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

app.get(`/`, (req, res) => {
    console.log("get /");
    res.render("Home");
});