import React, {useState,useEffect} from 'react';
import CreateTaskModal from '../components/CreateTaskModal';
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
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [message,setMessage] = useState('');
  const [selectedList, setSelectedList] = useState("Personal");
  const [selectedTask, setSelectedTask] = useState("");
  useEffect(()=>{
    searchTaskCategory({preventDefault:() => {}});
  }, [selectedList]);
  
  let _ud = localStorage.getItem('user_data'), ud = JSON.parse(_ud), userId = ud.id;
  var newtaskContent = "", newtaskTime = "", newtaskCategory = ""; 
  var search = '';
  var originalList = selectedList;
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

  // Function that creates a new object with the selected task name and push it into the tasks array
  const handleCreateTask = (taskName) => {
    setTasks(prevTasks => [...prevTasks, {name: taskName}]);
    setSelectedTask(taskName);
    setIsCreateTaskOpen(false);
  }; 

  // Function that handles the user queries
  const searchTaskCategory = async event => 
  {
    event.preventDefault();
    let obj = {user:user.user, search:selectedList};
    
    var js = JSON.stringify(obj);

    // Send the query to the backend and check if the query is valid
    try
    {
      const response = await fetch(bp.buildPath("api/searchCategory"), {method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      let txt = await response.text(), res = JSON.parse(txt);
      
      //setMessage(""); 
      //setMessage("* Task(s) have been found *");
      //setCardList(resultText);
      if (res.error.length > 0) {setMessage("API Error: " + res.error);}
      else {
        // This is the 2d array that holds the results. you can do taskArray[0] to see the first entry, taskArray[1] for the next, etc
        // Can also do taskArray[0][0]
        let taskArray = res.results;
        setMessage(taskArray);
       }
    }
    catch(e)
    {
      setMessage(""); 
      alert(e.toString());
      setMessage(e.toString());
    }
  };
  
  const searchTask = async event => 
  {
    event.preventDefault();
    let obj = {user:user.user, search:search.value};

    // Check for any empty fields
    if (obj.search === "")
    {
      setMessage("");
      setMessage("* Please type at least one character *");
      setCardList("");
      return;
    }
    
    var js = JSON.stringify(obj);

    // Send the query to the backend and check if the query is valid
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
      setMessage(""); 
      setMessage("* Task(s) have been found *");
      setCardList(resultText);
    }
    catch(e)
    {
      setMessage(""); 
      alert(e.toString());
      setMessage(e.toString());
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
          <button id="createListButton" onClick={() => setIsCreateListOpen(true)}>DISPLAY LIST</button>
          <button id="createTaskButton" onClick={() => setIsCreateTaskOpen(true)}>CREATE TASK</button>
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
        <div><p>{selectedList}</p></div>
        {isCreateTaskOpen && (
          <CreateTaskModal 
            isOpen={isCreateTaskOpen} 
            onRequestClose={() => setIsCreateTaskOpen(false)} 
            onCreateTask={handleCreateTask}
            tasks={tasks}
          />
        )}
        <div className="list-container">
          {lists.map((list) => (
            <div key={list.name} className="list">
              <div className="list-header">{}</div>
              <div className="list-body">{/* insert list items here */}</div>
            </div>
          ))}
        </div>
        <div className="list-container">
          {tasks.map((task) => (
            <div key={task.name} className="task">
              <div className="task-header">{task.name}</div>
              <div className="task-body">{/* insert list items here */}</div>
            </div>
          ))}
        </div>
        <span id="errorMessage">{message}</span>
      </div>
    </div>
  );
}

export default HomePage;