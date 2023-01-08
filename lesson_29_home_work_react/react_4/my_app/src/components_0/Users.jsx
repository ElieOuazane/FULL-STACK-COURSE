import { useState } from "react"
import { getData } from "../utils"

export default function Users(props) {
   const [user, setUser] = useState(null)
   const [error, setError] = useState("")

   function getUser(userId) {
      getData(`https://jsonplaceholder.typicode.com/users/${userId}`, (data, error) => {
         if (error) return setError(error)
         setUser(data)
         // setDataType(type)
      })
   }


   return (
      <>
         {user && <p>{user.email}</p>}

         {props.data.length > 0 ? props.data.map((user) => {
            return <div className="item" onClick={() => getUser(user.id)} key={user.id}> {user.username} </div>
         }) : <h1>Empty users</h1>}
      </>
   )
}
