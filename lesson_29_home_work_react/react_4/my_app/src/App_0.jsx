import { useState, useEffect, useRef } from "react";
import Posts from "./components_0/Posts";
import Todos from "./components_0/Todos";
import Users from "./components_0/Users";
import { getData } from "./utils";

function App_0() {
   const [data, setData] = useState([])
   const [error, setError] = useState("")
   const [dataType, setDataType] = useState("users")

   useEffect(() => {
      dataTypeChange("users")
   }, [])

   function dataTypeChange(type) {
      getData(`https://jsonplaceholder.typicode.com/${type}`, (data, error) => {
         if (error) return setError(error)
         setData(data)
         setDataType(type)
      })
   }

   // console.log(data)

   return (
      <main>
         <nav>
            <button
               style={{ backgroundColor: dataType === "users" ? "green" : "" }}
               onClick={() => dataTypeChange("users")}
            >
               USERS
            </button>
            <button
               style={{ backgroundColor: dataType === "todos" ? "green" : "" }}
               onClick={() => dataTypeChange("todos")}>
               TODOS
            </button>
            <button
               style={{ backgroundColor: dataType === "posts" ? "green" : "" }}
               onClick={() => dataTypeChange("posts")}
            >
               POSTS
            </button>
         </nav>

         <div className="list">
            {dataType === "users" && <Users data={data} />}
            {dataType === "posts" && <Posts data={data} />}
            {dataType === "todos" && <Todos data={data} />}
         </div>
      </main>
   )
}

export default App_0;
