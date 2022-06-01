import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/userReducer";
import CustomTextField from "./CustomComponents/CustomTextField";
import CustomButton from "./CustomComponents/CustomButton";
function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  return (
    <div>
      <CustomTextField
        type="text"
        id="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Enter Name"
      />
      <CustomTextField
        type="text"
        id="position"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
        placeholder="Enter Position"
      />
      <CustomButton
        onClick={() => {
          dispatch(addUser({ name: name, position: position, id: uuidv4() }));
        }}
        className="btn btn-sm green"
      >
        Add user
      </CustomButton>
    </div>
  );
}

export default Form;
