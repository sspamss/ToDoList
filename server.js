// "const" used to declare variables that WILL NOT be changed 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const url = 'mongodb+srv://User:Pass@fridge.gdztlsl.mongodb.net/?retryWrites=true&w=majority';
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(url);

// Connect to the Mongo DB
client.connect(console.log("mongodb connected"));

// Middleware, code that runs between the request and the response
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

// Function to add a contact to the database
app.post('/api/addUser', async (req, res, next) =>
{
  // Incoming: userId, color
  // Outgoing: error
	
  const fname = req.body["firstName"];
  const lname = req.body["lastName"];
  const uid = req.body["username"];
  const pass = req.body["password"];
  const email = req.body["email"];
  const newUser = {firstName:fname, lastName:lname, username:uid, password:pass, email:email};
  var error = '';
  const db = client.db("Fridge");
  const results = await db.collection('Users').find({username:uid, password:pass}).toArray();

  if (results.length != 1)
  {
    try
    {
      const db = client.db("Fridge");
      const result = db.collection('Users').insertOne(newUser);
    }
    catch(e)
    {
      error = e.toString();
    }
  }
  else
  {
    error = "This username is taken."
  }

  //cardList.push( card );
  var ret = { error: error };
  res.status(200).json(ret);
});

// Function to the log the user into the website
app.post('/api/login', async (req, res, next) => 
{
  // incoming: login, password
  // outgoing: id, firstName, lastName, error
  
  var error = '';
  const user = req.body["Login"];
  const password = req.body["Password"];
  const db = client.db("Fridge");
  const results = await db.collection('Users').find({username:user, password:password}).toArray();
  var id = -1;
  var fn = '';
  var ln = '';
  var em = '';

  // The user must input at least one character in length for each field
  if (results.length > 0)
  {
    id = results[0].username;
    fn = results[0].firstName;
    ln = results[0].lastName;
    em = results[0].email;
  }

  var ret = { id:id, firstName:fn, lastName:ln, email:em, error:''};
  res.status(200).json(ret);
});

// Function to search for a contact to the database
app.post('/api/searchcards', async (req, res, next) => 
{
  // incoming: userId, search
  // outgoing: results[], error

  var error = '';
  const { userId, search } = req.body;
  var _search = search.trim();
  const db = client.db("COP4331Cards");
  const results = await db.collection('Cards').find({"Card":{$regex:_search+'.*', $options:'r'}}).toArray();
  var _ret = [];

  // Finds all cards that match the search
  for (var i = 0; i < results.length; i++)
  {
    _ret.push( results[i].Card );
  }
  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});

// Start the server, use port 5050
app.listen(5050); // start Node + Express server on port 5000
