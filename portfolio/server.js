const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// //setup middleware
app.use(methodOverride('_method'));
// app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
// //sets up the port
const PORT = process.env.PORT || 3000;
//
// //setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// console.log('this is __dirname', __dirname);
//
// //sets up home route
app.get('/', (req,res) => {
  res.send('Welcome Home!');
  res.render('index', {
    data: 'Hey Hey Hey',
    title: 'game'
  })
});
//
// app.get('/db', (req,res) => {
//   res.send('loading portfolio');
//   console.log('Hitting route');
// })
// //links router file to the server
const portfolioRouter = require('./routes/portfolio-routes');
app.use('/portfolio', portfolioRouter);
//
// //404 message
// app.get('*', (req,res) => {
//   res.status(404).send('nothing to see here');
// });
//
// //sets up the PORT and listens for actions on the webpage
app.listen(PORT, ()=>{
  console.log(`Hello TJ I'm listening to you on PORT ${PORT}`);
});
