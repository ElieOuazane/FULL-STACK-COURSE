import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { getData } from "../utils"

export default function Users(props) {
   const [user, error, fetchData] = useFetch()

   const { data } = props

   if (!data || data.length === 0) {
      return <h1>No users</h1>
   }

   return (
      <>
         {user && <p>{user.email}</p>}

         {data.map((user) => {
            return <div
               className="item"
               onClick={() => fetchData(`https://jsonplaceholder.typicode.com/users/${user.id}`)}
               key={user.id}
            >
               {user.username}
            </div>
         })}
      </>
   )
}
