import React, { useState } from 'react';
import LoggedInName from '../components/LoggedInName';
import ToDoIcon from '../graphics/ToDoIcon.png';
import HomePageStyling from './HomePageStyling';
import { useHistory } from 'react-router-dom';

const HomePage = () =>
{
  let bp = require('./LoginPagePath.js');
  const history = useHistory();

  const [message,setMessage] = useState('');
  const [searchResults,setResults] = useState('');
  const [cardList,setCardList] = useState('');
  let _ud = localStorage.getItem('user_data');
  let ud = JSON.parse(_ud);
  let userId = ud.id;
  let firstName = ud.firstName;
  let lastName = ud.lastName;
  var card = '';
  var search = '';

  const logout = () =>
  {
    localStorage.removeItem('user_data'); // remove user session data from localStorage
    history.push('/'); // redirect to login page
  };

const addTask = async event => 
{
  event.preventDefault();

  let obj = {userId:userId, card:card.value};
  let js = JSON.stringify(obj);

  try
  {
    const response = await fetch(bp.buildPath("api/addTask"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});

    let txt = await response.text();
    let res = JSON.parse(txt);

    if (res.error.length > 0)
    {
      setMessage( "API Error:" + res.error );
    }
    else
    {
      setMessage('Card has been added');
    }
  }
  catch(e)
  {
    setMessage(e.toString());
  }
};

  const searchTask = async event => 
  {
    event.preventDefault();
        
    let obj = {userId:userId, search:search.value};
    let js = JSON.stringify(obj);

    try
    {
      const response = await fetch(bp.buildPath("api/search"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});

      let txt = await response.text();
      let res = JSON.parse(txt);
      let _results = res.results;
      let resultText = '';
      for (var i = 0; i < _results.length; i++ )
      {
        resultText += _results[i];
        if (i < _results.length - 1)
        {
          resultText += ', ';
        }
      }
      setResults('Card(s) have been retrieved');
      setCardList(resultText);
    }
    catch(e)
    {
      alert(e.toString());
      setResults(e.toString());
    }
  };

  return (
    <div>
      <HomePageStyling/>
      <div id = "cardUIDiv"><br/>
      <div class="form-group">
          <button type="button" id="logoutButton" class="buttons" onClick={logout}>Log Out</button><br/>
        </div>
        <div class="form-group">
          <img id="todolisticon" src={ToDoIcon} alt="To Do List Logo"/>
        </div>
        <div class="form-group">
          <button type = "button" id = "addTaskButton" class = "buttons" 
            onClick = {addTask}> Create New Task </button><br/>
          <span id = "cardAddResult">{message}</span>
        </div>
        <div class="form-group">
          <input type = "text" id = "searchText" placeholder = "SEARCH TASK" ref = {(c) => search = c}/> 
          <button type = "button" id = "searchTasksButton" class = "buttons" onClick = {searchTask}> Search </button><br/>
        </div>
        <div class="form-group">
          <button type = "button" id = "editTasksButton" class = "buttons"> Edit Tasks </button><br/>
        </div>
        <span id = "cardSearchResult">{searchResults}</span>
      </div>
    </div>
  );
}

export default HomePage;