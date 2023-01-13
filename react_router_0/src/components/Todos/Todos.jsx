import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Todos.css";
import TodosList from "./TodosList";
export default function Todos() {
  const [inputValue, setInputValue] = useState("");

  const [todos, error] = useFetch(
    "http://jsonplaceholder.typicode.com/todos",
    []
  );
    console.log(todos);

  let filteredTodos = []

  if (inputValue === "") {
     filteredTodos = todos
  } else {
     filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(inputValue.toLowerCase()))
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="todos_container">
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />

      <TodosList todos={filteredTodos} />
    </div>
  );
}
