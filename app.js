//module import
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

//adding routes
const addNoteRoutes = require('./routes/add-note');
const noteRoutes = require('./routes/notes')

//conrtollers import
const errorController = require('./controllers/error')

// handlebar settings   //changed to using ejs
// app.engine('hbs', expressHbs({layoutsDir: 'views/layout/', defaultLayout: 'main-layout', extname: 'hbs'}));

//ejs settings
app.set('view engine', 'ejs');
app.set('views', 'views');

//bodyparser and routing public files
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


// routing handlebars
app.use(addNoteRoutes);
app.use(noteRoutes)
app.use(errorController.get404);

//listen to server
app.listen(3000);
