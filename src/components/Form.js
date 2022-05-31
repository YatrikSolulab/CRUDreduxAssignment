import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addUser } from "../features/reducers/userReducer";
function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  return (
    <div>
      <input
        type="text"
        id="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        id="position"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addUser({ name: name, position: position, id: uuidv4() }));
        }}
        className="btn btn-sm green"
      >
        Add user
      </button>
    </div>
  );
}

export default Form;
