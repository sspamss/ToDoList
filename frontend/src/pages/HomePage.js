import React, { useState } from 'react';
import LoggedInName from '../components/LoggedInName';
import ToDoIcon from '../graphics/ToDoIcon.png';
import HomePageStyling from './HomePageStyling';

const HomePage = () =>
{
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

const addCard = async event => 
{
  event.preventDefault();

  let obj = {userId:userId,card:card.value};
  let js = JSON.stringify(obj);

  try
  {
    const response = await fetch('http://localhost:5050/api/addcard',
    {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

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

  const searchCard = async event => 
  {
    event.preventDefault();
        
    let obj = {userId:userId,search:search.value};
    let js = JSON.stringify(obj);

    try
    {
      const response = await fetch('http://localhost:5050/api/searchcards',
      {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

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
          <img id="todolisticon" src={ToDoIcon} alt="To Do List Logo"/>
        </div>
          <input type = "text" id = "newTask" placeholder = "ADD NEW TASK" 
          ref = {(c) => card = c}/>
        <button type = "button" id = "addTaskButton" class = "buttons" 
          onClick = {addCard}> New Task </button><br/>
          <p id = "cardList">{cardList}</p><br/><br/>
        <span id = "cardAddResult">{message}</span>
        <input type = "text" id = "searchText" placeholder = "SEARCH TASK" 
          ref = {(c) => search = c}/> 
        <button type = "button" id = "searchTasksButton" class = "buttons" 
          onClick = {searchCard}> Search Tasks</button><br/>
        <span id = "cardSearchResult">{searchResults}</span>
      </div>
    </div>
  );
}

export default HomePage;