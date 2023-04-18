import React from 'react';

const CreateTaskModalStyling = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Styling the "x" on the top left corner of the pop up */
        #closePopUp {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 20px;
          left: 10px;
          top: 10px;
          position: absolute;
        }

        /* Setting and styling the "CREATE A LIST" title */
        #createAList {
          color: #000000;
          display: block;
          font-family: 'Fredoka One', sans-serif;
          font-size: 18pt;
          position: relative;
        }

        /* Setting and styling the task name field */
        #tasknameField {
          color: #6C6C6C;
          border: 2px solid #9736C5;
          border-radius: 4px;
          font-family: 'Nunito', sans-serif;
          font-size: 10pt;
          margin-top: 0.5em;
          padding-left: 0.5em;
          text-align: center;

          height: 20px;
          width: 175px;
          position: relative;
          transform: translateX(-50%, -50%);
        }
        #tasknameField:focus {
          outline: none;
        }

        /* Setting and styling the task due date field */
        #taskDueDate {
          color: #6C6C6C;
          border: 2px solid #9736C5;
          border-radius: 4px;
          font-family: 'Nunito', sans-serif;
          font-size: 10pt;
          margin-top: 0.5em;
          padding-left: 0.5em;
          text-align: center;

          height: 23px;
          width: 177px;
          position: relative;
          transform: translateX(-50%, -50%);
        }
        #taskDueDate:focus {
          outline: none;
        }

        /* Setting and styling the tast category field */
        #taskCategory {
          color: #6C6C6C;
          border: 2px solid #9736C5;
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          font-size: 10pt;
          margin-top: 0.5em;
          padding-left: 0.5em;
          text-align: center;

          height: 27px;
          width: 188px;
          position: relative;
          transform: translateX(-50%, -50%);
        }
        #taskCategory:focus {
          outline: none;
        }

        /* Moving the three lists further down, too close to instructions */
        #listOptions {
          margin-top: 0.5em;
        }
        /* Aligning the three lists to be right under each other */
        #listOptions div {
          display: flex;
        }

        /* Styling the checkbox */
        [type="checkbox"] {
          cursor: pointer;
          margin-right: 0.5em;
          margin-left: 1.5em;
          transform: scale(1.2);
        }
        
        /* Setting and styling the "PERSONAL", "SCHOOL", "WORK" list option */
        #personalOption, #schoolOption, #workOption {
          margin-bottom: 0.5em;
        }

        /* Styling the error message (if there is one) */
        #errorMessagePopUp {
          color: #FF0000;
          font-size: 9pt;
          position: absolute;
          bottom: 70px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
        }

        /* Setting and styling "CREATE LIST" button in the pop up*/
        #createListPopUpButton {
          background-color: #9736C5;
          bottom: 33px;
          color: #FFFFFF;
          cursor: pointer;
          border: none;
          border-radius: 6px;
          font-family: 'Fredoka One', sans-serif;
          font-size: 12pt;
          position: absolute;
          transform: translateX(-50%);

          height: 30px;
          width: 120px;
        }
        /* Changing the "CREATE LIST" button color when hovered over */
        #createListPopUpButton:hover {
          background-color: #AB6DC9;
        }
      `
    }} />
  );
};

export default CreateTaskModalStyling;