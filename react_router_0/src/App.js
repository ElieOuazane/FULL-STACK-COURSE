import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UserTodos from "./components/Users/UserTodos";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TodoPage from "./pages/TodoPage";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";

function App() {
   return (
      <div className="app_container">
         <Header />
         <Main>

            <Routes>
               <Route path="/" element={<HomePage />} />

               <Route path="/about" element={<AboutPage />} />

               <Route path="/todos" element={<TodosPage />} />

               <Route path="/users" element={<UsersPage />}>
                  <Route path="todos/:user_id" element={<UserTodos />} />
               </Route>

               <Route path="/todos/:todo_id" element={<TodoPage />} />

               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Main>
      </div>
   );
}



export default App;
