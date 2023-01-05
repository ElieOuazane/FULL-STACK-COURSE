import { useState, useEffect } from "react";
import { getData } from "./utils";

// fetch("https://jsonplaceholder.typicode.com/users")
//    .then((response) => response.json())
//    .then((result) => {
//       console.log(result)
//       setUsers(result)
//    })
//    .catch((error) => {
//    })



function App() {
   const [users, setUsers] = useState([])
   const [userId, setUserId] = useState(1)
   const [user, setUser] = useState(null)
   const [error, setError] = useState("")

   useEffect(() => {
      getData("https://jsonplaceholder.typicode.com/users", (data, error) => {
         if (error) return setError(error)
         setUsers(data)
      })
   }, [])

   useEffect(() => {
      getData("https://jsonplaceholder.typicode.com/users/" + userId, (data, error) => {
         if (error) return setError(error)
         setUser(data)
      })
   }, [userId])

   return (
      <main>
         {error && <p>{error}</p>}
         {user && <p>User selected: {user.email}</p>}
         <div className="users_list">
            {users.map((user) => {
               return <div className="user_item" onClick={() => setUserId(user.id)} key={user.id}> {user.username} </div>
            })}
         </div>
      </main>
   )
}

export default App;
