import React, {useState} from 'react';
import DisplayListModal from '../components/DisplayListModal';
import HomePageStyling from './HomePageStyling';
import ToDoIcon from '../graphics/ToDoIcon.png';
import {useHistory} from 'react-router-dom';

// Function to handle the home page
const HomePage = () =>
{
  let bp = require('./LoginPagePath.js');

  const history = useHistory();
  const [cardList, setCardList] = useState('');
  const [isCreateListOpen, setIsCreateListOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [message,setMessage] = useState('');
  const [searchTaskMessage, setSearchTaskMessage] = useState('');
  const [selectedList, setSelectedList] = useState("");

  let _ud = localStorage.getItem('user_data'), ud = JSON.parse(_ud), userId = ud.id;
  var card = '', search = '';

  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem('user_data'));

  // Function that removes user session data from local storage then redirects to sign in page
  const signout = () =>
  {
    localStorage.removeItem('user_data');
    history.replace('/');
  };

  // Function that creates a new object with the selected list name and push it into the lists array
  const handleCreateList = (listName) => {
    setLists(prevLists => [...prevLists, {name: listName}]);
    setSelectedList(listName);
    setIsCreateListOpen(false);
  };  
    
  const createTask = async event => 
  {
    event.preventDefault();
    let obj = {userId:userId, card:card.value}, js = JSON.stringify(obj);

    try
    {
      const response = await fetch(bp.buildPath("api/addTask"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      let txt = await response.text(), res = JSON.parse(txt);

      if (res.error.length > 0) {setMessage("API Error: " + res.error);}
      else {setMessage("Card has been added");}
    }
    catch(e)
    {
      setMessage(e.toString());
    }
  };

  // Function that handles the user queries
  const searchTask = async event => 
  {
    event.preventDefault();
    let obj = {userId:userId, search:search.value}, js = JSON.stringify(obj);

    try
    {
      const response = await fetch(bp.buildPath("api/search"), {method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      let txt = await response.text(), res = JSON.parse(txt);
      let _results = res.results, resultText = '';

      // Find the task(s) that match the search query
      for (var i = 0; i < _results.length; i++ )
      {
        resultText += _results[i];
        if (i < _results.length - 1) {resultText += ', ';}
      }
      setSearchTaskMessage('Task(s) have been found.');
      setCardList(resultText);
    }
    catch(e)
    {
      alert(e.toString());
      setSearchTaskMessage(e.toString());
    }
  };

  return (
    <div>
      <HomePageStyling/>
      <div id="homePage">
        <text id="usernameStyling">Hi, {user.user}!</text>
        <div class="form-group">
          <button id="signoutButton" class="buttons" type="button" onClick={signout}>SIGN OUT</button>
        </div>
        <div class="form-group">
          <img id="todolisticon" src={ToDoIcon} alt="To Do List Logo"/>
        </div>
        <div class="form-group">
          <input id="searchText" placeholder="SEARCH" type="text" ref={(c) => search = c}/> 
          <button id="searchTaskButton" class="buttons" type="button" onClick={searchTask}>SEARCH</button>
        </div>
        <div class="form-group">
          <button id="createListButton" onClick={() => setIsCreateListOpen(true)}>CREATE LIST</button>
          <button id="createTaskButton" class="buttons" type="button" onClick={createTask}>CREATE TASK</button>
          <button id="editTaskButton" class="buttons" type="button">EDIT TASK</button>
        </div>
        {isCreateListOpen && (
          <DisplayListModal 
            isOpen={isCreateListOpen} 
            onRequestClose={() => setIsCreateListOpen(false)} 
            onCreateList={handleCreateList}
            lists={lists}
          />
        )}
        <div className="list-container">
          {lists.map((list) => (
            <div key={list.name} className="list">
              <div className="list-header">{list.name}</div>
              <div className="list-body">{/* insert list items here */}</div>
            </div>
          ))}
        </div>
        <span id="errorMessageCreateTask">{message}</span>
        <span id="searchTaskMessage">{searchTaskMessage}</span>
      </div>
    </div>
  );
}

export default HomePage;