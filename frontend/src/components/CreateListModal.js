import React, { useState } from "react";
import CreateListModalStyling from "./CreateListModalStyling";
import Modal from "react-modal";

const CreateListModal = ({ isOpen, onRequestClose, onCreateList }) => {
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
    const lists = [];
    if (personalChecked) lists.push("personal");
    if (schoolChecked) lists.push("school");
    if (workChecked) lists.push("work");
  
    if (lists.length === 0) {setMessage("Please select at least one list.");}
    else {onCreateList(lists);}
  };
  

  return (
    <div>
      <CreateListModalStyling />
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
        <text id="createAList">CREATE A LIST</text>
        <text id="createAListInstructions">Available lists to choose:</text>
        <button id="closePopUp" className="modal-close" onClick={onRequestClose}>X</button>
        <div id="listOptions">
          <div>
            <input id="personalOption" type="checkbox" checked={personalChecked} onChange={() => setPersonalChecked(!personalChecked)}/>
            <label for="personalOption" id="personalLabel">PERSONAL</label>
          </div>
          <div>
            <input id="schoolOption" type="checkbox" checked={schoolChecked} onChange={() => setSchoolChecked(!schoolChecked)}/>
            <label for="schoolOption" id="schoolLabel">SCHOOL</label>
          </div>
          <div>
            <input id="workOption" type="checkbox" checked={workChecked} onChange={() => setWorkChecked(!workChecked)}/>
            <label for="workOption" id="workLabel">WORK</label>
          </div>
        </div>
        <span id="errorMessagePopUp" class="w-100 text-center"> {message}</span>
        <button id="createListPopUpButton" onClick={handleCreateList}>CREATE LIST</button>
      </Modal>
    </div>
  );
};

export default CreateListModal;
