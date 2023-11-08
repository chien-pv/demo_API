import axios from "axios";
import Item from "./item";
import { useState, useEffect } from "react";

function ListTodos() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((respone) => {
        setTodos([...respone.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let datas = todos.map((item, index) => {
    return <Item key={index} {...item} />;
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{datas}</tbody>
    </table>
  );
}

export default ListTodos;
