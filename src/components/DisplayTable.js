import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/reducers/userReducer";
import DataTable from "react-data-table-component";
import TextField from "./CustomComponents/CustomTextField";
import CustomTextField from "./CustomComponents/CustomTextField";
import CustomButton from "./CustomComponents/CustomButton";

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
          <CustomButton
            onClick={() => {
              dispatch(deleteUser(row.id));
            }}
            className="btn btn-sm red"
          >
            Delete
          </CustomButton>
          <CustomButton
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
          </CustomButton>
        </>
      ),
    },
  ];

  return (
    <>
      {/* update form  */}
      <div>
        <CustomTextField
          type="text"
          defaultValue={name}
          value={name}
          placeholder="Update Name"
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
        <CustomTextField
          type="text"
          defaultValue={position}
          value={position}
          placeholder="Update Position"
          onChange={(event) => {
            updatePosition(event.target.value);
          }}
        />
        <CustomButton
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
        </CustomButton>
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
