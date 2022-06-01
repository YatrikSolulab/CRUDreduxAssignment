import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/reducers/userReducer";
import DataTable from "react-data-table-component";

function DisplayTable() {
  const dispatch = useDispatch();
  const [name, updateName] = useState("");
  const [position, updatePosition] = useState("");
  const [id, setID] = useState("");

  const users = useSelector((state) => state.user.value);
  const columns = [
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "User Position",
      selector: (row) => row.position,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            onClick={() => {
              dispatch(deleteUser(row.id));
            }}
            className="btn btn-sm red"
          >
            Delete
          </button>
          <button
            onClick={() => {
              updateName(row.name);
              updatePosition(row.position);
              setID(row.id);
              console.log(name);
              console.log(position);
            }}
            className="btn btn-sm green"
          >
            Update
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      {/* update form  */}
      <div>
        <input
          type="text"
          defaultValue={name}
          value={name}
          placeholder="Name"
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
        <input
          type="text"
          defaultValue={position}
          value={position}
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
                id: id,
              })
            );
          }}
        >
          Save
        </button>
      </div>
{/* update form end  */}
      <DataTable
        title="User Data"
        columns={columns}
        data={users}
        pagination
        fixedHeader
      />
    </>
  );
}

export default DisplayTable;
