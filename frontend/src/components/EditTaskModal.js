import React, {useState} from "react";
import EditTaskModalStyling from "./EditTaskModalStyling";
import Modal from "react-modal";

const EditTaskModal = ({isOpen, onRequestClose, taskToEdit}) =>
{
  // Import the path to the backend
  let bp = require("../pages/LoginPagePath.js");

  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem('user_data'));
  const [message, setMessage] = useState('');
  const [taskContent, setTaskContent] = useState(taskToEdit.taskContent);
  const [taskCategory, setTaskCategory] = useState('');
  const [taskDueDate, setTaskDueDate] = useState(null);

  // Function that sets and styles the pop up box
  const customStyles = {
    content: {
      backgroundColor: "#F6F6EF",
      transform: "translate(-50%, -50%)",
      border: "3px solid #9736C5",
      borderRadius: "10px",

      left: "50%",
      top: "50%",
      height: "200px",
      width: "215px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.065)",
    },
  };

  // Function that handles editing a task
  const handleEditTask = async event => 
  {
    event.preventDefault();

    // Check for any empty fields
    if (!taskContent) {setMessage("* Please enter a task name *"); return;}
    if (!taskDueDate) {setMessage("* Please select a task due date *"); return;}
    if (!taskCategory) {setMessage("* Please select a task category *"); return;}

    // Make sure when choosing the task that you have the user provide newtaskContent, newtaskTime (must be in datetime format but as a string), newtaskCategory but make sure its a dropdown of three options.
    // let obj = {id: taskToEdit.editedTaskID, taskContent: taskContent, time: taskDueDate, category: taskCategory, user:user.user}, js = JSON.stringify(obj);
    let obj = {taskContent:"",time:"",category:"", user:"", newTaskContent: taskContent, newTime: taskDueDate, newCategory: taskCategory}, js = JSON.stringify(obj);

    try
    {
      const response = await fetch(bp.buildPath("api/editTask"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      let txt = await response.text(), res = JSON.parse(txt);
      // const res = await fetch('/api/editTask', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     id: taskToEdit.editedTaskID,
      //     taskContent: taskContent,
      //     time: taskDueDate,
      //     user: user.user, // replace with the user ID of the current user
      //     newTaskContent: newTaskContent,
      //     newTime: newTime,
      //     newCategory: newCategory,
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      if (res.error.length > 0) {setMessage(res.error);}
      else {setMessage(<span id="successMessagePopUp">* Task edited successfully! *</span>);}
    }
    catch(e)
    {
      setMessage(e.toString());
    }
  };

  // Function to handle task category selection
  const handleTaskCategoryChange = (event) => {
    setTaskCategory(event.target.value);
  };

  return (
    <div>
      <EditTaskModalStyling/>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
        <text id="editList">EDIT TASK</text>
        <button id="closePopUp" className="modal-close" onClick={onRequestClose}>X</button>
        <div>
          <input id="tasknameField" type="text" className="form-control col-md-12" placeholder="TASK NAME" value={taskContent} onChange={(e) => setTaskContent(e.target.value)}/>
        </div>
        <div>
          <input id="taskDueDate" type="datetime-local" required onChange={(e) => setTaskDueDate(e.target.value)}></input>
        </div>
        <div>
          <select id="taskCategory" value={taskCategory} onChange={handleTaskCategoryChange} required>
            <option value="">TASK CATEGORY</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
            <option value="Work">Work</option>
          </select>
        </div>
        <span id="errorMessagePopUp" class="w-100 text-center"> {message}</span>
        <button id="createListPopUpButton" onClick={handleEditTask}>EDIT TASK</button>
      </Modal>
    </div>
  );
};

export default EditTaskModal;