const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

//const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://oshadi:<pasword>@cluster0.sh8gf.mongodb.net/<clustername>?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

/*app.get('/', function(req, res) {
    res.send('Hello World')
  })*/


  /*MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })*/

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', (req, res) => {
    res.sendFile('E:/Submission/quotes/New folder/addQuotes' + '/index.html')
  })
  app.post('/quotes', (req, res) => {
    console.log('Hello!')
  })
