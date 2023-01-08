import { useState } from "react"
import { getData } from "../utils"



export default function Todos(props) {
   const [todo, setTodo] = useState(null)
   const [error, setError] = useState("")

   function getTodo(todoId) {
      console.log(todoId)
      getData(`https://jsonplaceholder.typicode.com/todos/${todoId}`, (data, error) => {
         if (error) return setError(error)
         setTodo(data)
      })
   }

   return (

      <div>
         {todo && JSON.stringify(todo)}
         {
            props.data.map((item) => {
               return <div className="item" onClick={() => getTodo(item.id)} key={item.id}> {item.title} </div>
            })
         }

      </div>

   )

}
