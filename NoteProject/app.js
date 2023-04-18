require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//STATIC FILES
app.use(express.static('public'));

//TEMPLATING ENGINE
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

/*app.get('/', function (req, res) {
    const locals = {
        title: 'NoteNotes',
        description: 'Free Note App'
    }
    res.render('index',locals);
});*/

//ROUTES

app.use('/', require ('./server/routes/index'));





app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}
)
