import React, {useState} from "react";
import DisplayListModalStyling from "./DisplayListModalStyling";
import Modal from "react-modal";

const DisplayListModal = ({isOpen, onRequestClose, onCreateList}) => {
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
      height: "193px",
      width: "215px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  // Function that keeps track of which lists the user wants
  const handleCreateList = () => {
    var lists = "Personal"
    
    if (personalChecked) lists = "Personal";

    if (schoolChecked) lists = "School";

    if (workChecked) lists = "Work";
    

    if (lists.length === 0) {setMessage("Please select at least one list.");}
    else {onCreateList(lists);}
  };
  

  return (
    <div>
      <DisplayListModalStyling/>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <text id="createAList">DISPLAY A LIST</text>
      <text id="createAListInstructions">Available lists to choose:</text>
      <button id="closePopUp" className="modal-close" onClick={onRequestClose}>X</button>
      <div id="listOptions">
        <div>
          <input id="personalOption" type="radio" name="listOption" checked={personalChecked} onChange={() => {setPersonalChecked(true);setSchoolChecked(false);setWorkChecked(false);}}/>
          <label for="personalOption" id="personalLabel">Personal</label>
        </div>
        <div>
          <input id="schoolOption" type="radio" name="listOption" checked={schoolChecked} onChange={() => {setPersonalChecked(false);setSchoolChecked(true);setWorkChecked(false);}}/>
          <label for="schoolOption" id="schoolLabel">School</label>
        </div>
        <div>
          <input id="workOption" type="radio" name="listOption" checked={workChecked} onChange={() => {setPersonalChecked(false);setSchoolChecked(false);setWorkChecked(true);}}/>
          <label for="workOption" id="workLabel">Work</label>
        </div>
      </div>
      <span id="errorMessagePopUp" class="w-100 text-center"> {message}</span>
      <button id="createListPopUpButton" onClick={handleCreateList}>DISPLAY LIST</button>
      </Modal>
    </div>
  );
};

export default DisplayListModal;
