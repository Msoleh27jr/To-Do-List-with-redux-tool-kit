import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFun, funAdd, funCheck, funEdit } from "./reducers/forSlides";
import "./App.css";

const App = () => {
  const data = useSelector((state) => state.counter.data);
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");
  const [addStatus, setAddStatus] = useState("false");
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editStatus, setEditStatus] = useState("false");
  const [idx, setIdx] = useState(null);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="inputs">
        <input
          type="text"
          placeholder="Add Name"
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Age"
          value={addAge}
          onChange={(e) => setAddAge(e.target.value)}
        />
        <select
          value={addStatus}
          onChange={(e) => setAddStatus(e.target.value)}
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <button
          onClick={() => {
            let user = {
              id: Date.now(),
              name: addName,
              age: addAge,
              status: addStatus == "true" ? true : false,
            };
            dispatch(funAdd(user));
            setAddAge("");
            setAddName("");
            setAddStatus("false");
          }}
        >
          save
        </button>
      </div>
      <div className="edit-inputs">
        <input
          type="text"
          placeholder="Edit Name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Edit Age"
          value={editAge}
          onChange={(e) => setEditAge(e.target.value)}
        />
        <select
          value={editStatus}
          onChange={(e) => setEditStatus(e.target.value)}
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <button
          onClick={() => {
            let editUser = {
              id: idx,
              name: editName,
              age: editAge,
              status: editStatus == "true" ? true : false,
            };
            dispatch(funEdit(editUser));
            setEditAge("");
            setEditName("");
            setEditStatus("false");
            setIdx(null);
          }}
        >
          Edit
        </button>
      </div>
      {data.map((e) => (
        <div key={e.id} className="user-table">
          <h1>{e.name}</h1>
          <h2>{e.age}</h2>
          <input
            type="checkbox"
            checked={e.status}
            onChange={() => dispatch(funCheck(e.id))}
          />
          <button onClick={() => dispatch(deleteFun(e.id))}>Delete</button>
          <button
            onClick={() => {
              setEditName(e.name);
              setEditAge(e.age);
              setEditStatus(e.status ? "true" : "false");
              setIdx(e.id);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
