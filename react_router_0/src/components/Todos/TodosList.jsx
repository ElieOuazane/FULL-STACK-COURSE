import { Link, NavLink } from "react-router-dom"

export default function TodosList(props) {
   return (
      <div className="todo_list">
         {
            props.todos.map((todo) => {
               return <NavLink
                  state={{ todo: todo }}
                  to={`/todos/${todo.id}?title=${todo.title}&completed=${todo.completed.toString()}`} className="todo_item" key={todo.id}>
                  {todo.title}
               </NavLink>
            })
         }
      </div>
   )
}
