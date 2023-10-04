import "./App.css";
import Home from "./components/homePage/Home";
import Login from "./components/loginPage/Login";
import SignUp from "./components/signUpPage/SignUp";
import { Routes, Route } from "react-router-dom";
import TodoList from "./components/todos/TodoList";
import ErrorPage from "./components/errorPage/ErrorPage";
import Success from "./components/successPage/Success";
import Logout from "./components/logOutPage/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
