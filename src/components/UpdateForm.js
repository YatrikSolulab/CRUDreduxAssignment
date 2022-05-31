import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/reducers/userReducer";
function UpdateForm(props) {
    const dispatch = useDispatch();
    const [name, updateName] = useState("");
    const [position, updatePosition] = useState("");
  return (
    <div>
      <input
        type="text"
        defaultValue={props.name}
        value={props.name}
        placeholder="Name"
        onChange={(event) => {
          updateName(event.target.value);
        }}
      />
      <input
        type="text"
        defaultValue={props.position}
        value={props.position}
        placeholder="Position"
        onChange={(event) => {
          updatePosition(event.target.value);
        }}
      />
      <button
        className="btn btn-sm green"
        onClick={() => {
          dispatch(
            updateUser({
              name: name,
              position: position,
              id: props.id,
            })
          );
        }}
      >
        Save
      </button>
    </div>
  )
}

export default UpdateForm