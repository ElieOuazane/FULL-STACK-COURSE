import { useRef } from "react";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Users from "./components/Users";
import { useFetch } from "./hooks/useFetch";

function App() {
   const [data, error, fetchData] = useFetch(`https://jsonplaceholder.typicode.com/users`)

   const dataType = useRef("users")

   function dataTypeChange(type) {
      dataType.current = type
      fetchData(`https://jsonplaceholder.typicode.com/${type}`)
   }

   console.log(data)

   return (
      <main>
         <nav>
            <button
               style={{ backgroundColor: dataType.current === "users" ? "green" : "" }}
               onClick={() => dataTypeChange("users")}
            >
               USERS
            </button>
            <button
               style={{ backgroundColor: dataType.current === "todos" ? "green" : "" }}
               onClick={() => dataTypeChange("todos")}>
               TODOS
            </button>
            <button
               style={{ backgroundColor: dataType.current === "posts" ? "green" : "" }}
               onClick={() => dataTypeChange("posts")}
            >
               POSTS
            </button>
         </nav>

         <div className="list">
            {dataType.current === "users" && <Users data={data} />}
            {dataType.current === "posts" && <Posts data={data} />}
            {dataType.current === "todos" && <Todos data={data} />}
         </div >
      </main>
   )
}

export default App;
