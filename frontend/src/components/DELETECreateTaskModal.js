import React, { useState } from "react";
// import CreateListModalStyling from "./CreateListModalStyling";
import Modal from "react-modal";

const CreateTaskModal = ({ isOpen, onRequestClose, onCreateTask }) => {
    const [message, setMessage] = useState('');
    const [personalChecked, setPersonalChecked] = useState(false);
    const [schoolChecked, setSchoolChecked] = useState(false);
    const [workChecked, setWorkChecked] = useState(false);

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

    // i am trying to figure this out i am suffering besties
    const handleCreateTask = () => {
        {setMessage("What type of task are you creating?");}
        const lists = [];

        if (personalChecked) lists.push("personal");
        if (schoolChecked) lists.push("school");
        if (workChecked) lists.push("work");
    }
}