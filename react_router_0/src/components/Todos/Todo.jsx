import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

export default function Todo() {
   const params = useParams()
   const search = useSearchParams()
   const location = useLocation()

   const [todo, error, getData, setData] = useFetch(`http://jsonplaceholder.typicode.com/todos/${params.todo_id}`)

   console.log("search", search[0].get("title"))
   console.log("search", search[0].get("completed"))
   console.log("location", location)
   console.log("params", params)

   if (error) {
      return <h2>{error}</h2>
   }

   return (
      <div>
         {todo && JSON.stringify(todo)}
      </div>
   )
}
