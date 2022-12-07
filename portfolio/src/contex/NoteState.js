import { useState } from "react";
import alertContex from "./alertContex";
let name;
let mess;
let alertAlt = false;
const NoteState = (props) => {
  const alertFunc = (passFunc) => {
    if (passFunc !== 1) {
      name = passFunc;
    } else {
      if (alertAlt) {
        name(mess);
      }
    }
  };

  const showAlertFunc = (message) => {
    alertAlt = true;
    mess = message;
    alertFunc(1);
  };

  return (
    <alertContex.Provider value={{ alertFunc, showAlertFunc }}>
      {props.children}
    </alertContex.Provider>
  );
};

export default NoteState;
