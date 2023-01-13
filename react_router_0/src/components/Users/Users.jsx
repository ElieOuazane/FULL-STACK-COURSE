import { useEffect, useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import "./Users.css"

export default function Users() {
   const [users, error] = useFetch("http://jsonplaceholder.typicode.com/users", [])

   return (
      <div className="users_container">
         <div className="user_list">
            {users.map((user) => {
               return <NavLink className="user_item" to={`/users/todos/${user.id}`} key={user.id}> {user.username} </NavLink>
            })}
         </div>
         <Outlet />
      </div>
   )
}
