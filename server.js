// "const" used to declare variables that WILL NOT be changed 
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');         
//const { stringify } = require('querystring');
//const sendEmail = require("./utils/sendEmail");
///const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5050; 
const app = express();

app.set('port', (process.env.PORT || 5050));

// Server static assets if in production
if (process.env.NODE_ENV === 'production') 
{
  // Set static folder
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));});
}

require('dotenv').config();
const url = process.env.MONGODB_URI;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
client.connect();

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
  const fname = req.body["firstName"];
  const lname = req.body["lastName"];
  const uid = req.body["user"];
  const pass = req.body["password"];
  const email = req.body["email"];
  const newUser = {firstName:fname, lastName:lname, user:uid, password:pass, email:email};
  var error = '';
  const db = client.db("Fridge");
  const results = await db.collection('Users').find({user:uid, password:pass}).toArray();
  
  if (results.length != 1)
  {
    try {const db = client.db("Fridge"); const result = db.collection('Users').insertOne(newUser);}
    catch(e) {error = e.toString();}
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
  const user = req.body["user"];
  const password = req.body["password"];
  const db = client.db("Fridge");
  const results = await db.collection('Users').find({user:user, password:password}).toArray();
  var id = -1;
  var fn = '';
  var ln = '';
  var em = '';

  // The user must input at least one character in length for each field
  if (results.length > 0)
  {
    id = results[0]._id;
    fn = results[0].firstName;
    ln = results[0].lastName;
    em = results[0].email;
  }

  var ret = { _id:id, firstName:fn, lastName:ln, email:em, error:''};
  res.status(200).json(ret);
});
// Function to search for a contact to the database

// Function to the log the user into the website
app.post('/api/valid', async (req, res, next) => 
{
  const user = req.body["user"];
  const email = req.body["email"];
  const db = client.db("Fridge");
  const results = await db.collection('Users').find({user:user, email:email}).toArray();
  var id = -1;
  var fn = '';
  var ln = '';
  var em = '';

  // The user must input at least one character in length for each field
  if (results.length > 0)
  {
    id = results[0]._id;
    fn = results[0].firstName;
    ln = results[0].lastName;
    em = results[0].email;
  }

  var ret = { _id:id, firstName:fn, lastName:ln, email:em, error:''};
  console.log(ret);
  res.status(200).json(ret);
});

app.post('/api/sendemail', async (req, res) => {
  const user = req.body["user"];
  const email = req.body["email"];
  
  try {
    const send_to = email;
    const sent_from = 'thefridgelist@gmail.com';
    const reply_to = email;
    const subject = "Password Reset";
    var randomstring = Math.random().toString(36).slice(-8);
    const message = "This is an email to notify you that your account has attempted to reset your password, the new password is: "+ randomstring;
    console.log(email);
    await sendEmail(subject, message, send_to, sent_from, reply_to);
    
    res.status(200).json({ success: true, message: "Email Sent" , password: randomstring});
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.post('/api/search', async (req, res, next) => 
{
  // incoming: userId, search
  // outgoing: results[], error

  var error = '';
  const { userId, search } = req.body;
  var _search = search.trim();
  const db = client.db("Fridge");

  const results = await db.collection('Tasks').find({"taskContent":{$regex:_search+'.*', $options:'i'}}).toArray();
  var _ret = [];

  // Finds all cards that match the search
  for (var i = 0; i < results.length; i++)
  {
    _ret.push( results[i].taskContent );
  }

  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});


app.post('/api/searchCategory', async (req, res, next) => 
{
  const { userId, search } = req.body;
  const db = client.db("Fridge");
  var error = '', _ret = [], _search = search.trim();
  const results = await db.collection('Tasks').find({"category":{$regex:_search+'.*', $options:'i'}}).toArray();

  // Finds all cards that match the search
  for (var i = 0; i < results.length; i++) {_ret.push( results[i].taskContent);}
  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});

app.post('/api/addTask', async (req, res, next) =>
{
  const cont = req.body["taskContent"];
  const time = req.body["time"];
  const cat = req.body["category"];
  const t =req.body["tstamp"];
  const uid = req.body["user"];
  const newTask = {taskContent:cont, time:time, category:cat, tstamp:t, user:uid};

  console.log(newTask)

  const db = client.db("Fridge");
  const results = await db.collection('Tasks').find({taskContent:cont,category:cat}).toArray();
  var error = '';
  
  if (results.length != 1)
  {
    try {client.db("Fridge"); db.collection('Tasks').insertOne(newTask);}
    catch(e) {error = e.toString();}
  }
  else
  {
    error = "You already added this task"
  }

  var ret = { error: error };
  res.status(200).json(ret);
});

app.post('/api/delTask', async (req, res, next) =>
{
  const cont = req.body["taskContent"];
  const time = req.body["time"];
  const cat = req.body["category"];
  const uid = req.body["user"];
  const newTask = {taskContent:cont, time:time, category:cat, user:uid};
  const db = client.db("Fridge");
  const results = await db.collection('Tasks').find({taskContent:cont, time:time, category:cat, user:uid}).toArray();
  var error = '';
  
  if (results.length == 1)
  {
    try {client.db("Fridge"); db.collection('Tasks').deleteOne(newTask);}
    catch(e) {error = e.toString();}
  }
  else
  {
    error = "not found"
  }

  var ret = { error: error };
  res.status(200).json(ret);
});

// Use port 5050 to resolve iOS conflicts with port 5000
app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});
