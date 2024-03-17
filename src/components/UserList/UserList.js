import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ListItems from "../ListItems/ListItems";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, id: Date.now(), name: e.target.value });
  };
  const sendUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", user)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}> workshop API</h1>
      <div>
        <input
          type="text"
          placeholder="tape your name"
          on
          Change={handleChange}
          style={{ color: "green " }}
        />
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={sendUser}
        >
          Send
        </button>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "100px",
            color: "green",
            fontWeight: "bold",
            backgroundColor: "black",
            alignItems: "center",
            height: "200vh",
          }}
        >
          {users.map((user, index) => {
            return <ListItems user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
