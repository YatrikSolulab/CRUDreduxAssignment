import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deleteUser, updateUser } from "../features/reducers/userReducer";

function DisplayTable() {
  const dispatch = useDispatch();
  const [name, updateName] = useState("");
  const [position, updatePosition] = useState("");

  const users = useSelector((state) => state.user.value);
  const data = {
    columns: [
      {
        label: "Name",
      },
      {
        label: "Position",
      },
      {
        label: "Actions",
      },
    ],
    rows: users,
  };

  return (
    <>
      <table>
        <tr>
          {data.columns.map((item) => {
            return <th>{item.label}</th>;
          })}
        </tr>

        {data.rows.map((item) => {
          return (
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue={item.name}
                  onChange={(event) => {
                    updateName(event.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={item.position}
                  onChange={(event) => {
                    updatePosition(event.target.value);
                  }}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteUser(item.id));
                  }}
                  className="btn  btn-sm green"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    dispatch(
                      updateUser({
                        name: name,
                        position: position,
                        id: item.id,
                      })
                    );
                  }}
                  className="btn btn-sm green"
                >
                  Update
                </button>
              </td>
            </tr>
          );
        })}
      </table>

    </>
  );
}

export default DisplayTable;
