import React, {useState,useEffect} from 'react';
import CreateTaskModal from '../components/CreateTaskModal';
import DisplayListModal from '../components/DisplayListModal';
import HomePageStyling from './HomePageStyling';
import ToDoIcon from '../graphics/ToDoIcon.png';
import {useHistory} from 'react-router-dom';
import EditTaskModal from '../components/EditTaskModal';

// Function to handle the home page

const HomePage = () =>
{

  function renderTable(filteredArray, deleteTask,  message)
  {
    return(
      <div id="taskTable">
              <span id="errorMessage">{message}</span>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredArray.slice(0,filteredArray.length).map((item,index) => {
                  return(
                    <tr>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                      <td><button id="editTaskButton" class="buttons" type="button" onClick={(event)=>setEditTaskOpen(event,item)}>EDIT</button>
                      <br />
                        <button id="deleteTaskButton" class="buttons" type="button" onClick={(event)=>deleteTask(event,item)}>DELETE</button></td>
                        {isEditTaskOpen && (
                          <EditTaskModal 
                            isOpen={isEditTaskOpen} 
                            onRequestClose={() => setEditTaskOpen(false)} 
                            onEditTask={handleEditTask}
                            tasks={tasks}
                          />
                        )}
                    </tr>
                  )
                })}
              </tbody> 
            </table>
            </div> );
  }
  
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
  const [array,setArray] = useState([]);
  const [filteredArray,setFilteredArray] = useState([]);
  const [isEditTaskOpen,setEditTaskOpen] = useState("");


  useEffect(()=>{
    searchTaskCategory({preventDefault:() => {}});
  }, [selectedList]);
  
  let _ud = localStorage.getItem('user_data'), ud = JSON.parse(_ud), userId = ud.id;
  var newtaskContent = "", newtaskTime = "", newtaskCategory = ""; 
  var search = '';
  var originalList = selectedList;
  var taskArray;
  var delContent, delTime;
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

  const handleEditTask = (taskName) => {
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
      if (res.error.length > 0) {setMessage(res.error);}
      else {
        // This is the 2d array that holds the results. you can do taskArray[0] to see the first entry, taskArray[1] for the next, etc
        // Can also do taskArray[0][0]
        taskArray = res.results;
        setArray(res.results);
        setFilteredArray(res.results);
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
  const onSiteSearch = async event => 
    {
      event.preventDefault();
      let obj = {user:user.user, search:search.value};
      /*if (obj.search === "")
      {
        setMessage("* Please type at least one character *");
        return;
      }*/
      
       const filteringarray = array.filter((row)=>
        row[0].toLowerCase().includes(obj.search.toLowerCase())
      );
      setFilteredArray(filteringarray);
      // setMessage(filteredArray);
     
    };

    const deleteTask = async (event, item) => 
    {
      const confirmed = window.confirm("Are you sure you want to delete this task?");
      if (confirmed){
      event.preventDefault();
      let obj = {taskContent:item[0], time:item[1], category:selectedList,user:user.user};
  
     
      var js = JSON.stringify(obj);
  
      // Send the query to the backend and check if the query is valid
      try
      {
        const response = await fetch(bp.buildPath("api/delTask"), {method:'POST', body:js, headers:{'Content-Type':'application/json'}});
        let txt = await response.text(), res = JSON.parse(txt);
       
  
        if(res.error != "")
        {
          setMessage(res.error)
        }
        else{
          const newFilteredTasks = filteredArray.filter((t) => t[0] !== item[0]);
          const newAllTasks = array.filter((t) => t[0] !== item[0]);
          setFilteredArray(newFilteredTasks)
          setArray(newAllTasks);
          renderTable(filteredArray,deleteTask,message);
        }
      }
      catch(e)
      {
        setMessage(""); 
        alert(e.toString());
        setMessage(e.toString());
      }
    }

    // const editTask = async (event, item) => 
    // {
    //   event.preventDefault();
    //   let obj = {taskContent:item[0], time:item[1], category:selectedList,user:user.user};
  
     
    //   var js = JSON.stringify(obj);
  
    //   // Send the query to the backend and check if the query is valid
    //   try
    //   {
    //     const response = await fetch(bp.buildPath("api/editTask"), {method:'POST', body:js, headers:{'Content-Type':'application/json'}});
    //     let txt = await response.text(), res = JSON.parse(txt);
       
  
    //     if(res.error != "")
    //     {
    //       setMessage(res.error)
    //     }
    //     else{
    //       const newFilteredTasks = filteredArray.filter((t) => t[0] !== item[0]);
    //       const newAllTasks = array.filter((t) => t[0] !== item[0]);
    //       setFilteredArray(newFilteredTasks)
    //       setArray(newAllTasks);
    //       renderTable(filteredArray,deleteTask,message);
    //     }
    //   }
    //   catch(e)
    //   {
    //     setMessage(""); 
    //     alert(e.toString());
    //     setMessage(e.toString());
    //   }
    // }
      
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
          <button id="searchTaskButton" class="buttons" type="button" onClick={onSiteSearch}>SEARCH</button>
        </div>
        <div class="form-group">
          <button id="createListButton" onClick={() => setIsCreateListOpen(true)}>DISPLAY LIST</button>
          <button id="createTaskButton" onClick={() => setIsCreateTaskOpen(true)}>CREATE TASK</button>
          
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
        <div>
        {renderTable(filteredArray, deleteTask, message)}
        </div>
    </div>
  </div>
  );
}

export default HomePage;