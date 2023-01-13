import { Outlet, useParams } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import TodosList from "../Todos/TodosList"

export default function UserTodos() {
   const params = useParams()
   const [todos, error] = useFetch(`http://jsonplaceholder.typicode.com/todos?userId=${params.user_id}`, [])

   return (
      <div className="todos_container">
         <h2>User todos user id: {params.user_id} </h2>
         <TodosList todos={todos} />
      </div>
   )
}
