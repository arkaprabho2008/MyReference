const express = require('express'); // Import Express
const path = require('path');
const bodyparser = require('body-parser');
const app = express() // Creating our first express application
let hostname = '127.0.0.1';  // Defining hostname
let port = process.env.PORT || 5500;  // Defining port
const tutorialsRouter = require('./routes/tutorials');
// Mongoose related stuff
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejstest', { useNewUrlParser: true, useUnifiedTopology: true });


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  desc: String
});


// kittySchema.methods.speak = function () {
//   const greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }


const Contact = mongoose.model('Contact', contactSchema);





app.set('view-engine', 'pug');  // Setting our view-engine as ejs
app.use('/static', express.static('static'));  // Setting up our static directory
// app.set('views', path.join(__dirname, 'views'));  // Setting up our views directory 
app.set('views', path.join(__dirname, 'views')) // Set the views directory
app.use(express.urlencoded())
app.use('/tutorials', tutorialsRouter);


// Creating some Endpoints for our application
app.get('/', (req, res) => {
  res.render('index.pug', { title: 'Home' });
})

// app.get('/tutorials', (req, res) => {
//   res.render('tutorials.pug', { title: 'Tutorials' });
// })

app.get('/contact', (req, res) => {
  res.render('contact.pug', { title: 'Contact Us' });
})

app.post('/contact', (req, res) => {
  let myData = new Contact(req.body)
  myData.save().then(() => {
    res.send('The item has saved to the database');
  }).catch(() => {
    res.status(400).send('The item has not been saved to the database');
  })

  // res.status(200).render('contact.pug')
})

// Creating our server
app.listen(port, hostname, () => {
  console.log('Your app is running on port ', port);
})