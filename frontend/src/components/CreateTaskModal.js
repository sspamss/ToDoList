import React, {useState} from "react";
import CreateTaskModalStyling from "./CreateTaskModalStyling";
import Modal from "react-modal";

const CreateTaskModal = ({isOpen, onRequestClose, onCreateTask}) => {
  var createTaskName;

  const [message, setMessage] = useState('');
  const [personalChecked, setPersonalChecked] = useState(false);
  const [schoolChecked, setSchoolChecked] = useState(false);
  const [workChecked, setWorkChecked] = useState(false);

  // Function that sets and styles the pop up box
  const customStyles = {
    content: {
      backgroundColor: "#F6F6EF",
      transform: "translate(-50%, -50%)",
      border: "3px solid #9736C5",
      borderRadius: "10px",

      left: "50%",
      top: "50%",
      height: "250px",
      width: "215px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  // Function that handles creating a task
  const handleCreateTask = async event => 
  {
    // const tasks = [];

    // if (personalChecked) tasks.push("MEMEME");
    // if (schoolChecked) tasks.push("TEST");
    // if (workChecked) tasks.push("OK");
  
    // if (tasks.length === 0) {setMessage("Please select at least one task.");}
    // else {onCreateTask(tasks);}



    // event.preventDefault();
    // // Make sure when choosing the task that you have the user provide newtaskContent, newtaskTime (must be in datetime format but as a string), newtaskCategory but make sure its a dropdown of three options.
    // let obj = {taskContent: newtaskContent, time: newtaskTime, category: newtaskCategory, user:user.user}, js = JSON.stringify(obj);
    // if(newtaskContent != '' && newtaskTime != "" && newtaskCategory != ""){
    //   try
    //   {
    //     const response = await fetch(bp.buildPath("api/addTask"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
    //     let txt = await response.text(), res = JSON.parse(txt);

    //     if (res.error.length > 0) {setMessage("API Error: " + res.error);}
    //     else {setMessage("Task has been added");}
    //   }
    //   catch(e)
    //   {
    //     setMessage(e.toString());
    //   }
    // }
    // else{
    //   setMessage("Unable to add task (not all fields filled in)")
    // }
  };

  return (
    <div>
      <CreateTaskModalStyling/>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
        <text id="createAList">CREATE A TASK</text>
        <text id="createAListInstructions">Please fill in all fields:</text>
        <button id="closePopUp" className="modal-close" onClick={onRequestClose}>X</button>
        <div>
          <input id="tasknameField" type="text" class="form-control col-md-12" placeholder="TASK NAME" ref={(c) => (createTaskName = c)}/>
        </div>
        <div>
          <input id="taskDueDate" type="datetime-local" name="startTime" required></input>
        </div>
        <div id="listOptions">
          <div>
            {/* <input id="personalOption" type="checkbox" checked={personalChecked} onChange={() => setPersonalChecked(!personalChecked)}/>
            <label for="personalOption" id="personalLabel">Personal</label> */}
          </div>
          <div>
            {/* <input id="schoolOption" type="checkbox" checked={schoolChecked} onChange={() => setSchoolChecked(!schoolChecked)}/>
            <label for="schoolOption" id="schoolLabel">School</label> */}
          </div>
          <div>
            {/* <input id="workOption" type="checkbox" checked={workChecked} onChange={() => setWorkChecked(!workChecked)}/>
            <label for="workOption" id="workLabel">Work</label> */}
          </div>
        </div>
        <span id="errorMessagePopUp" class="w-100 text-center"> {message}</span>
        <button id="createListPopUpButton" onClick={handleCreateTask}>CREATE TASK</button>
      </Modal>
    </div>
  );
};

export default CreateTaskModal;